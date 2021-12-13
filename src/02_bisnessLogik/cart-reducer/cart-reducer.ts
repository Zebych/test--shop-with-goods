import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormikErrorType } from '01_userInterface';
import { ProductObjType, serverAPI } from '03_inquiries';
import { saveAddedCartToLocalStorage } from '06_utils';

const initCartState: InitCartType = {
  sumPrice: 0,
  addedCart: [],
  conditionBuy: false,
};

// Thunk extraReducers
export const buyTC = createAsyncThunk(
  'cart/buy',
  async (param: { addedCart: Array<ProductObjType>; values: FormikErrorType }) =>
    serverAPI.postPurchases(param.addedCart, param.values),
);

const slice = createSlice({
  name: 'cart',
  initialState: initCartState,
  reducers: {
    setCart(state, action: PayloadAction<{ addProduct: ProductObjType }>) {
      const apAddProduct = action.payload.addProduct;
      // eslint-disable-next-line no-param-reassign
      state.addedCart = [...state.addedCart, apAddProduct];
      // eslint-disable-next-line no-param-reassign
      state.sumPrice = state.addedCart.reduce((acc, el) => acc + el.price, 0);
      saveAddedCartToLocalStorage(state.addedCart);
    },
    deleteCart(state, action: PayloadAction<{ id: number }>) {
      // eslint-disable-next-line no-param-reassign
      state.addedCart = state.addedCart.filter(f => f.id !== action.payload.id);
      saveAddedCartToLocalStorage(state.addedCart);
    },
    totalPrice(state) {
      // eslint-disable-next-line no-param-reassign
      state.sumPrice = state.addedCart.reduce((acc, el) => acc + el.price, 0);
    },
    subtractCart(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      state.addedCart.map(a => {
        if (a.id === action.payload.id) {
          // eslint-disable-next-line no-param-reassign
          a.price -= a.price / a.toPurchase;
          // eslint-disable-next-line no-param-reassign
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
          // eslint-disable-next-line no-param-reassign
          p.price += p.price / p.toPurchase;
          // eslint-disable-next-line no-param-reassign
          p.toPurchase += 1;
        }
        return p;
      });
      // eslint-disable-next-line no-param-reassign
      state.sumPrice = state.addedCart.reduce((acc, el) => acc + el.price, 0);
      saveAddedCartToLocalStorage(state.addedCart);
    },
    conditionBuy(state, action: PayloadAction<{ result: boolean }>) {
      // eslint-disable-next-line no-param-reassign
      state.conditionBuy = action.payload.result;
    },
  },
  extraReducers: builder => {
    builder.addCase(buyTC.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.conditionBuy = action.payload.result;
      // eslint-disable-next-line no-param-reassign
      state.addedCart = [];
      // eslint-disable-next-line no-param-reassign
      state.sumPrice = state.addedCart.reduce((acc, el) => acc + el.price, 0);
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
