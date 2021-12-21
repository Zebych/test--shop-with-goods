/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { API, ProductObjType } from 'api';
import { FormikErrorType } from 'components';
import { StartValue } from 'enums';
import { saveAddedCartToLocalStorage } from 'localStorage';

const initCartState: InitCartType = {
  sumPrice: 0,
  addedCart: [],
  conditionBuy: false,
};

// Thunk extraReducers
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
      state.addedCart = [...state.addedCart, apAddProduct];
      state.sumPrice = state.addedCart.reduce(
        (acc, el) => acc + el.price,
        StartValue.accStartValue,
      );
      saveAddedCartToLocalStorage(state.addedCart);
    },
    deleteCart(state, action: PayloadAction<{ id: number }>) {
      state.addedCart = state.addedCart.filter(f => f.id !== action.payload.id);
      saveAddedCartToLocalStorage(state.addedCart);
    },
    totalPrice(state) {
      state.sumPrice = state.addedCart.reduce(
        (acc, el) => acc + el.price,
        StartValue.accStartValue,
      );
    },
    subtractCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.addedCart.map(a => {
        if (a.id === action.payload.id) {
          a.price -= a.price / a.toPurchase;
          a.toPurchase -= 1;
        }
        return state;
      });
      saveAddedCartToLocalStorage(state.addedCart);
    },
    addProductInCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.addedCart.map(p => {
        const actionP = action.payload;
        if (p.id === actionP.id) {
          p.price += p.price / p.toPurchase;
          p.toPurchase += 1;
        }
        return p;
      });
      state.sumPrice = state.addedCart.reduce(
        (acc, el) => acc + el.price,
        StartValue.accStartValue,
      );
      saveAddedCartToLocalStorage(state.addedCart);
    },
    conditionBuy(state, action: PayloadAction<{ result: boolean }>) {
      state.conditionBuy = action.payload.result;
    },
  },
  extraReducers: builder => {
    builder.addCase(buyTC.fulfilled, (state, action) => {
      state.conditionBuy = action.payload.data;
      state.addedCart = [];
      state.sumPrice = state.addedCart.reduce(
        (acc, el) => acc + el.price,
        StartValue.accStartValue,
      );
      saveAddedCartToLocalStorage(state.addedCart);
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

// Types
export type InitCartType = {
  sumPrice: number;
  addedCart: Array<ProductObjType>;
  conditionBuy: boolean;
};
