import { AppRootStateType } from 'store';

export const selectSumPrice = (state: AppRootStateType): number => state.cart.sumPrice;
