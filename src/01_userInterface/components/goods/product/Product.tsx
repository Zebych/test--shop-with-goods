import React, { FC, memo, ReactElement } from 'react';

import { Button } from '@material-ui/core';

import {
  addInCartTC,
  addProductInCart,
  useAppDispatch,
  useAppSelector,
} from '02_bisnessLogik';
import { arrAddedCart } from '05_common';

export const Product: FC<ProductPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const addedCartArr = useAppSelector(arrAddedCart);
    const dispatch = useAppDispatch();

    // Проверка на наличие товара в массиве запланированных покупок
    const addInCart = (): void => {
      if (addedCartArr.some(a => a.id === id)) {
        dispatch(addProductInCart({ id }));
      } else {
        dispatch(addInCartTC(id));
      }
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
