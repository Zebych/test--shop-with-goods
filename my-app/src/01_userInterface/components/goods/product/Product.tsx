import React, { FC, memo, ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import {
  AppRootStateType,
  addInCartTC,
  addProductInCart,
  totalPrice,
} from '02_bisnessLogik';
import { ProductObjType } from '03_inquiries';

export const Product: FC<ProductPropsType> = memo(
  ({ photo, id, name, price }): ReactElement => {
    const addedCartArr = useSelector<AppRootStateType, Array<ProductObjType>>(
      state => state.cart.addedCart,
    );
    const dispatch = useDispatch();

    // Проверка на наличие товара в массиве запланированных покупок
    const addInCart = (): void => {
      if (addedCartArr.some(a => a.id === id)) {
        dispatch(addProductInCart({ id }));
        dispatch(totalPrice());
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
