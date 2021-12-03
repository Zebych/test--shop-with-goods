import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormikErrorType } from '01_userInterface';
import { ProductObjType, serverAPI } from '03_inquiries';
import { saveAddedCartToLocalStorage } from '06_utils';

const initCartState: InitCartType = {
  sumPrice: 0,
  addedCart: [],
  conditionBuy: false,
};

const slice = createSlice({
  name: 'cart',
  initialState: initCartState,
  reducers: {
    setCart(state, action: PayloadAction<{ addProduct: ProductObjType }>) {
      const apAddProduct = action.payload.addProduct;
      // eslint-disable-next-line no-param-reassign
      state.addedCart = [...state.addedCart, apAddProduct];
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
      saveAddedCartToLocalStorage(state.addedCart);
    },
    setBuy(state, action: PayloadAction<{ result: boolean }>) {
      // eslint-disable-next-line no-param-reassign
      state.conditionBuy = action.payload.result;
    },
    cartClear(state) {
      // eslint-disable-next-line no-param-reassign
      state.addedCart = [];
      saveAddedCartToLocalStorage(state.addedCart);
    },
  },
  /*  extraReducers: builder => {
    builder.addCase(addInCartTC.fulfilled, (state, action) => {
      // const apAddProduct = action.payload.addProduct;
      // eslint-disable-next-line no-param-reassign
      state.addedCart = [...state.addedCart,action.payload.addProduct];
      saveAddedCartToLocalStorage(state.addedCart);
    });
  }, */
});
export const cartReducer = slice.reducer;

// Actions
export const {
  setCart,
  totalPrice,
  subtractCart,
  addProductInCart,
  deleteCart,
  setBuy,
  cartClear,
} = slice.actions;

export const addInCartTC = createAsyncThunk('cart/addInCart', (id: number, thunkAPI) =>
  serverAPI.getCart(id).then((res: any) => {
    thunkAPI.dispatch(totalPrice());
    thunkAPI.dispatch(setCart({ addProduct: res }));
  }),
);
export const buyTC = createAsyncThunk(
  'cart/buy',
  (param: { addedCart: Array<ProductObjType>; values: FormikErrorType }, thunkAPI) => {
    serverAPI.postPurchases(param.addedCart, param.values).then((res: any) => {
      thunkAPI.dispatch(setBuy(res));
      thunkAPI.dispatch(cartClear());
      thunkAPI.dispatch(totalPrice());
    });
  },
);

// Types
export type InitCartType = {
  sumPrice: number;
  addedCart: Array<ProductObjType>;
  conditionBuy: boolean;
};
