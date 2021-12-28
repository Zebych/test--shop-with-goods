/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ACC_START_VALUE } from './constants';
import { InitCartType } from './types';

import { API, ProductObjType } from 'api';
import { FormikErrorType } from 'components';
import { keyToLocalStorage, saveAddedCartToLocalStorage } from 'localStorage';

const initCartState: InitCartType = {
  sumPrice: 0,
  containedInCarts: [],
  isPurchaseMade: false,
};
const keyToLocalData = keyToLocalStorage.productsPlannedForPurchase;

export const buyTC = createAsyncThunk(
  'cart/buy',
  async (param: { addedCart: Array<ProductObjType>; values: FormikErrorType }) =>
    API.postPurchases(param.addedCart, param.values),
);

const slice = createSlice({
  name: 'cart',
  initialState: initCartState,
  reducers: {
    setCart(state, action: PayloadAction<{ addProduct: ProductObjType }>) {
      const apAddProduct = action.payload.addProduct;
      state.containedInCarts = [...state.containedInCarts, apAddProduct];
      state.sumPrice = state.containedInCarts.reduce(
        (acc, product) => acc + product.price,
        ACC_START_VALUE,
      );
      saveAddedCartToLocalStorage(state.containedInCarts, keyToLocalData);
    },
    deleteCart(state, action: PayloadAction<{ id: number }>) {
      state.containedInCarts = state.containedInCarts.filter(
        product => product.id !== action.payload.id,
      );
      saveAddedCartToLocalStorage(state.containedInCarts, keyToLocalData);
    },
    totalPrice(state) {
      state.sumPrice = state.containedInCarts.reduce(
        (acc, product) => acc + product.price,
        ACC_START_VALUE,
      );
    },
    subtractCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.containedInCarts.map(product => {
        if (product.id === action.payload.id) {
          product.price -= product.price / product.toPurchase;
          product.toPurchase -= 1;
        }
        return state;
      });
      saveAddedCartToLocalStorage(state.containedInCarts, keyToLocalData);
    },
    addProductInCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.containedInCarts.map(product => {
        const actionP = action.payload;
        if (product.id === actionP.id) {
          product.price += product.price / product.toPurchase;
          product.toPurchase += 1;
        }
        return product;
      });
      state.sumPrice = state.containedInCarts.reduce(
        (acc, product) => acc + product.price,
        ACC_START_VALUE,
      );
      saveAddedCartToLocalStorage(state.containedInCarts, keyToLocalData);
    },
    conditionBuy(state, action: PayloadAction<{ result: boolean }>) {
      state.isPurchaseMade = action.payload.result;
    },
  },
  extraReducers: builder => {
    builder.addCase(buyTC.fulfilled, (state, action) => {
      state.isPurchaseMade = action.payload.data;
      state.containedInCarts = [];
      state.sumPrice = state.containedInCarts.reduce(
        (acc, product) => acc + product.price,
        ACC_START_VALUE,
      );
      saveAddedCartToLocalStorage(state.containedInCarts, keyToLocalData);
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
