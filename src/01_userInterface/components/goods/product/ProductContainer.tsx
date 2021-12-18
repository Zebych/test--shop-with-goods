import React, { FC, memo, ReactElement } from 'react';

import { Product } from './Product';

import {
  addProductInCart,
  isInCart,
  initData,
  setCart,
  useAppDispatch,
  useAppSelector,
} from 'store';

export const ProductContainer: FC<ProductContainerPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const productsIsInCart = useAppSelector(isInCart);
    const initDataProducts = useAppSelector(initData);

    const dispatch = useAppDispatch();

    // Проверка на наличие товара в массиве запланированных покупок
    const addInCart = (): void => {
      if (productsIsInCart.some(productIsInCart => productIsInCart.id === id)) {
        dispatch(addProductInCart({ id }));
      } else {
        const addProduct = initDataProducts.find(
          initDataProduct => initDataProduct.id === id,
        );
        if (addProduct) {
          dispatch(setCart({ addProduct }));
        }
      }
    };

    return <Product name={name} photo={photo} price={price} addInCart={addInCart} />;
  },
);

// Types
export type ProductContainerPropsType = {
  id: number;
  name: string;
  photo: string;
  price: number;
};
