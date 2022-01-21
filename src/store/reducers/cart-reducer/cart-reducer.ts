/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-magic-numbers */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppStatus } from '../app-reducer';

import { CART, UNIT } from './constants';
import { InitCartType } from './types';

import { API, ProductType } from 'api';
import { FormikValuesType } from 'components';
import { PreloaderStatus } from 'enum';
import { LocalStorageKey, saveCartContentsLocally } from 'localStorage';

const initCartState: InitCartType = {
  sumPrice: 0,
  cartProducts: [],
  isPurchaseMade: false,
};
const keyToLocalData = LocalStorageKey.ProductsPlannedForPurchase;

export const buyTC = createAsyncThunk(
  'shoppingCart/buy',
  async (param: { addedCart: ProductType[]; values: FormikValuesType }, { dispatch }) => {
    dispatch(setAppStatus({ status: PreloaderStatus.Loading }));
    const { data } = await API.setPostPurchases(param.addedCart, param.values);
    dispatch(setAppStatus({ status: PreloaderStatus.Succeeded }));
    return { data };
  },
);

const slice = createSlice({
  name: CART,
  initialState: initCartState,
  reducers: {
    setCart(state, action: PayloadAction<{ addProduct: ProductType }>) {
      const { addProduct } = action.payload;
      state.cartProducts = [...state.cartProducts, addProduct];
      state.sumPrice = state.cartProducts.reduce(
        (acc, product) => acc + product.price,
        0,
      );
      saveCartContentsLocally(state.cartProducts, keyToLocalData);
    },
    deleteCart(state, action: PayloadAction<{ id: number }>) {
      state.cartProducts = state.cartProducts.filter(
        product => product.id !== action.payload.id,
      );
      saveCartContentsLocally(state.cartProducts, keyToLocalData);
    },
    totalPrice(state) {
      state.sumPrice = state.cartProducts.reduce(
        (acc, product) => acc + product.price,
        0,
      );
    },
    subtractCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.cartProducts.map(product => {
        const { id, price, toPurchase } = product;
        if (id === action.payload.id) {
          product.price -= price / toPurchase;
          product.toPurchase -= UNIT;
        }
        return state;
      });
      saveCartContentsLocally(state.cartProducts, keyToLocalData);
    },
    addProductInCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.cartProducts.map(product => {
        const { id, price, toPurchase } = product;
        if (id === action.payload.id) {
          product.price += price / toPurchase;
          product.toPurchase += UNIT;
        }
        return product;
      });
      state.sumPrice = state.cartProducts.reduce(
        (acc, product) => acc + product.price,
        0,
      );
      saveCartContentsLocally(state.cartProducts, keyToLocalData);
    },
    conditionBuy(state, action: PayloadAction<{ result: boolean }>) {
      state.isPurchaseMade = action.payload.result;
    },
  },
  extraReducers: builder => {
    builder.addCase(buyTC.fulfilled, (state, action) => {
      state.isPurchaseMade = action.payload.data;
      state.cartProducts = [];
      state.sumPrice = state.cartProducts.reduce(
        (acc, product) => acc + product.price,
        0,
      );
      saveCartContentsLocally(state.cartProducts, keyToLocalData);
    });
  },
});
export const cartReducer = slice.reducer;

// Actions
export const {
  setCart,
  totalPrice,
  subtractCart,
  addProductInCart,
  deleteCart,
  conditionBuy,
} = slice.actions;
