import React, { FC, memo, ReactElement } from 'react';

import { Product } from './Product';

import { ProductObjType } from 'api';
import {
  addProductInCart,
  toContentsOfCart,
  toInitData,
  setCart,
  useAppDispatch,
  useAppSelector,
} from 'store';

export const ProductContainer: FC<ProductContainerPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const productsIsInCart = useAppSelector(toContentsOfCart);
    const initDataProducts = useAppSelector(toInitData);

    const dispatch = useAppDispatch();

    // Проверка на наличие товара в массиве запланированных покупок
    const buyProductButton = (): ReturnBuyProductButtonType => {
      const alreadyInPurchases = productsIsInCart.some(
        productIsInCart => productIsInCart.id === id,
      );
      const addProduct = initDataProducts.find(
        initDataProduct => initDataProduct.id === id,
      );

      if (alreadyInPurchases) {
        return dispatch(addProductInCart({ id }));
      }
      if (addProduct) {
        return dispatch(setCart({ addProduct }));
      }
      return undefined;
    };

    return (
      <Product name={name} photo={photo} price={price} addInCart={buyProductButton} />
    );
  },
);

// Types
export type ProductContainerPropsType = {
  id: number;
  name: string;
  photo: string;
  price: number;
};
type ReturnBuyProductButtonType =
  | undefined
  | { payload: { id: number } }
  | { payload: { addProduct: ProductObjType } };
