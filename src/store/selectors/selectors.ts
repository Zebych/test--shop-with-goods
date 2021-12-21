import { ProductObjType } from 'api';
import { AppRootStateType } from 'store/index';

export const toTotalPriceProductsInCart = (state: AppRootStateType): number =>
  state.cart.sumPrice;
export const toContentsOfCart = (state: AppRootStateType): Array<ProductObjType> =>
  state.cart.addedCart;
export const toGoodsData = (state: AppRootStateType): Array<ProductObjType> =>
  state.goods.data;
export const toConditionBuyData = (state: AppRootStateType): boolean =>
  state.cart.conditionBuy;
export const toInitData = (state: AppRootStateType): Array<ProductObjType> =>
  state.goods.data;
