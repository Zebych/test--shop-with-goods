export { store } from './store';
export type { AppRootStateType } from './store';

export { useAppDispatch } from './hooksType';
export { useAppSelector } from './hooksType';

export { setCart } from './reducers';
export { totalPrice } from './reducers';
export { subtractCart } from './reducers';
export { addProductInCart } from './reducers';
export { deleteCart } from './reducers';
export { buyTC } from './reducers';
export { conditionBuy } from './reducers';
export type { InitCartType } from './reducers';

export { goodsAllTC } from './reducers';

export { toTotalPriceOfPlannedPurchases } from './selectors';
export { getDataAboutContentsOfCart } from './selectors';
export { getGoodsData } from './selectors';
export { getPurchaseMadeData } from './selectors';
export { getInitData } from './selectors';
