import React, { FC, memo, ReactElement } from 'react';

import { Product } from './Product';
import { ProductContainerPropsType, ReturnBuyProductButtonType } from './types';

import { useAppDispatch, useAppSelector } from 'hooks';
import { addProductInCart, setCart } from 'store/reducers';
import { selectCartContents, selectGoodsData } from 'store/selectors';

export const ProductContainer: FC<ProductContainerPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const dispatch = useAppDispatch();

    const cartContents = useAppSelector(selectCartContents);
    const rawDataOfGoods = useAppSelector(selectGoodsData);

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
