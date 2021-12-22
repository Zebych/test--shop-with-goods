import React, { FC, memo, ReactElement } from 'react';

import { Product } from './Product';
import { ProductContainerPropsType, ReturnBuyProductButtonType } from './types';

import {
  addProductInCart,
  setCart,
  toContentsOfCart,
  toInitData,
  useAppDispatch,
  useAppSelector,
} from 'store';

export const ProductContainer: FC<ProductContainerPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const dispatch = useAppDispatch();

    const productsIsInCart = useAppSelector(toContentsOfCart);
    const initDataProducts = useAppSelector(toInitData);

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
