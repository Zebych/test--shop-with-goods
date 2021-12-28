import React, { FC, memo, ReactElement } from 'react';

import { Product } from './Product';
import { ProductContainerPropsType, ReturnBuyProductButtonType } from './types';

import {
  addProductInCart,
  setCart,
  getCartContents,
  getRawDataOfGoods,
  useAppDispatch,
  useAppSelector,
} from 'store';

export const ProductContainer: FC<ProductContainerPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const dispatch = useAppDispatch();

    const cartContents = useAppSelector(getCartContents);
    const rawDataOfGoods = useAppSelector(getRawDataOfGoods);

    const handleBuyProductButton = (): ReturnBuyProductButtonType => {
      const hasPurchase = cartContents.some(product => product.id === id);

      const hasProductRawData = rawDataOfGoods.find(product => product.id === id);

      if (hasPurchase) {
        return dispatch(addProductInCart({ id }));
      }

      if (hasProductRawData) {
        return dispatch(setCart({ addProduct: hasProductRawData }));
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
