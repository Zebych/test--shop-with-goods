import { ProductType } from 'api';
import { AppRootStateType } from 'store';

export const selectCartContents = (state: AppRootStateType): ProductType[] =>
  state.cart.cartContents;
