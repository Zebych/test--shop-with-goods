import React, { FC, memo, ReactElement } from 'react';

import { Product } from './Product';
import { ProductContainerPropsType, ReturnBuyProductButtonType } from './types';

import {
  addProductInCart,
  setCart,
  getDataAboutContentsOfCart,
  getInitData,
  useAppDispatch,
  useAppSelector,
} from 'store';

export const ProductContainer: FC<ProductContainerPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const dispatch = useAppDispatch();

    const productsIsInCart = useAppSelector(getDataAboutContentsOfCart);
    const initDataProducts = useAppSelector(getInitData);

    const handleBuyProductButton = (): ReturnBuyProductButtonType => {
      const alreadyInPurchases = productsIsInCart.some(
        productIsInCart => productIsInCart.id === id,
      );

      const setProductInCart = initDataProducts.find(
        initDataProduct => initDataProduct.id === id,
      );

      if (alreadyInPurchases) {
        return dispatch(addProductInCart({ id }));
      }

      if (setProductInCart) {
        return dispatch(setCart({ addProduct: setProductInCart }));
      }

      return undefined;
    };

    return (
      <Product
        name={name}
        photo={photo}
        price={price}
        onBuyProductButton={handleBuyProductButton}
      />
    );
  },
);
