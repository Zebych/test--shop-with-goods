import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { cartReducer } from './cart-reducer/cart-reducer';
import { goodsReducer } from './goods-reducer/goods-reducer';

const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
