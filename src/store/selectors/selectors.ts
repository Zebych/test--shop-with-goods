import { ProductObjType } from 'api';
import { AppRootStateType } from 'store';

export const toTotalPriceOfPlannedPurchases = (state: AppRootStateType): number =>
  state.cart.sumPrice;
export const getDataAboutContentsOfCart = (
  state: AppRootStateType,
): Array<ProductObjType> => state.cart.addedCart;
export const getGoodsData = (state: AppRootStateType): Array<ProductObjType> =>
  state.goods.data;
export const getPurchaseMadeData = (state: AppRootStateType): boolean =>
  state.cart.isPurchaseMade;
export const getInitData = (state: AppRootStateType): Array<ProductObjType> =>
  state.goods.data;
