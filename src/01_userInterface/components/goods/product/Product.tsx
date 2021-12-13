import React, { FC, memo, ReactElement } from 'react';

import { Button } from '@material-ui/core';

import {
  addInCartTC,
  addProductInCart,
  setCart,
  useAppDispatch,
  useAppSelector,
} from '02_bisnessLogik';
import { arrAddedCart, initData } from '05_common';

export const Product: FC<ProductPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const addedCartArr = useAppSelector(arrAddedCart);
    const initDataArr = useAppSelector(initData);

    const dispatch = useAppDispatch();

    // Проверка на наличие товара в массиве запланированных покупок
    const addInCart = (): void => {
      if (addedCartArr.some(a => a.id === id)) {
        dispatch(addProductInCart({ id }));
      } else {
        const addProduct = initDataArr.find(i => i.id === id);
        if (addProduct) {
          dispatch(setCart({ addProduct }));
        }
      }
    };
    const addAxios = (): void => {
      dispatch(addInCartTC());
    };

    return (
      <div style={{ padding: '20px' }}>
        <img
          src={photo}
          alt="product_photo"
          style={{ width: '300px', height: '300px' }}
        />
        <p>{name}</p>
        <h3>{price}</h3>
        <Button variant="contained" color="primary" onClick={addInCart}>
          buy
        </Button>
        <Button variant="contained" color="primary" onClick={addAxios}>
          api
        </Button>
      </div>
    );
  },
);

// Types
export type ProductPropsType = {
  id: number;
  name: string;
  photo: string;
  price: number;
};
