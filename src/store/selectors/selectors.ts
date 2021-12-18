import { ProductObjType } from 'api';
import { AppRootStateType } from 'store/index';

export const totalPriceCarts = (state: AppRootStateType): number => state.cart.sumPrice;
export const isInCart = (state: AppRootStateType): Array<ProductObjType> =>
  state.cart.addedCart;
export const goodsArrData = (state: AppRootStateType): Array<ProductObjType> =>
  state.goods.data;
export const dataConditionBuy = (state: AppRootStateType): boolean =>
  state.cart.conditionBuy;
export const initData = (state: AppRootStateType): Array<ProductObjType> =>
  state.goods.data;
