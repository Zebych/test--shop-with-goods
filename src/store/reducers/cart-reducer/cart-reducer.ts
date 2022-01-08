/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppStatus } from '../app-reducer/app-reducer';

import { ACC_START_VALUE } from './constants';
import { InitCartType } from './types';

import { apiRequests, ProductObjType } from 'api';
import { FormikErrorType } from 'components';
import { keyToLocalStorage, saveCartContentsLocally } from 'localStorage';

const initCartState: InitCartType = {
  sumPrice: 0,
  cartContents: [],
  isPurchaseMade: false,
};
const keyToLocalData = keyToLocalStorage.productsPlannedForPurchase;

export const buyTC = createAsyncThunk(
  'shoppingCart/buy',
  async (param: { addedCart: ProductObjType[]; values: FormikErrorType }, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({ status: 'loading' }));
    const { data } = await apiRequests.setPostPurchases(param.addedCart, param.values);
    thunkAPI.dispatch(setAppStatus({ status: 'succeeded' }));
    return { data };
  },
);

const slice = createSlice({
  name: 'cart',
  initialState: initCartState,
  reducers: {
    setCart(state, action: PayloadAction<{ addProduct: ProductObjType }>) {
      const apAddProduct = action.payload.addProduct;
      state.cartContents = [...state.cartContents, apAddProduct];
      state.sumPrice = state.cartContents.reduce(
        (acc, product) => acc + product.price,
        ACC_START_VALUE,
      );
      saveCartContentsLocally(state.cartContents, keyToLocalData);
    },
    deleteCart(state, action: PayloadAction<{ id: number }>) {
      state.cartContents = state.cartContents.filter(
        product => product.id !== action.payload.id,
      );
      saveCartContentsLocally(state.cartContents, keyToLocalData);
    },
    totalPrice(state) {
      state.sumPrice = state.cartContents.reduce(
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
      state.cartContents.map(product => {
        if (product.id === action.payload.id) {
          product.price -= product.price / product.toPurchase;
          product.toPurchase -= 1;
        }
        return state;
      });
      saveCartContentsLocally(state.cartContents, keyToLocalData);
    },
    addProductInCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.cartContents.map(product => {
        const actionP = action.payload;
        if (product.id === actionP.id) {
          product.price += product.price / product.toPurchase;
          product.toPurchase += 1;
        }
        return product;
      });
      state.sumPrice = state.cartContents.reduce(
        (acc, product) => acc + product.price,
        ACC_START_VALUE,
      );
      saveCartContentsLocally(state.cartContents, keyToLocalData);
    },
    conditionBuy(state, action: PayloadAction<{ result: boolean }>) {
      state.isPurchaseMade = action.payload.result;
    },
  },
  extraReducers: builder => {
    builder.addCase(buyTC.fulfilled, (state, action) => {
      state.isPurchaseMade = action.payload.data;
      state.cartContents = [];
      state.sumPrice = state.cartContents.reduce(
        (acc, product) => acc + product.price,
        ACC_START_VALUE,
      );
      saveCartContentsLocally(state.cartContents, keyToLocalData);
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
