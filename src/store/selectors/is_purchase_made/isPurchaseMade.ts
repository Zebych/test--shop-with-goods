import { AppRootStateType } from 'store';

export const selectDataIsPurchaseMade = (state: AppRootStateType): boolean =>
  state.cart.isPurchaseMade;
