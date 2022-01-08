import { ProductObjType } from 'api';
import { AppRootStateType, RequestStatusType } from 'store';

export const getSumPrice = (state: AppRootStateType): number => state.cart.sumPrice;
export const getCartContents = (state: AppRootStateType): Array<ProductObjType> =>
  state.cart.cartContents;
export const getGoodsData = (state: AppRootStateType): ProductObjType[] =>
  state.goods.data;
export const getDataIsPurchaseMade = (state: AppRootStateType): boolean =>
  state.cart.isPurchaseMade;
export const getRawDataOfGoods = (state: AppRootStateType): Array<ProductObjType> =>
  state.goods.data;
export const getAppStatus = (state: AppRootStateType): RequestStatusType =>
  state.app.status;
