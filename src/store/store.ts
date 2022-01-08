import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './reducers/app-reducer/app-reducer';
import { cartReducer } from './reducers/cart-reducer/cart-reducer';
import { goodsReducer } from './reducers/goods-reducer/goods-reducer';

const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
  app: appReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
