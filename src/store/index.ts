export { store } from './store';
export type { AppRootStateType } from './store';

export { useAppDispatch } from './hooksType/hooksType';
export { useAppSelector } from './hooksType/hooksType';

export { setCart } from './reducers/cart-reducer';
export { totalPrice } from './reducers/cart-reducer';
export { subtractCart } from './reducers/cart-reducer';
export { addProductInCart } from './reducers/cart-reducer';
export { deleteCart } from './reducers/cart-reducer';
export { buyTC } from './reducers/cart-reducer';
export type { InitCartType } from './reducers/cart-reducer';

export { goodsAllTC } from './reducers/goods-reducer';

export { totalPriceCarts } from './selectors';
export { isInCart } from './selectors';
export { goodsArrData } from './selectors';
export { dataConditionBuy } from './selectors';
export { initData } from './selectors';
