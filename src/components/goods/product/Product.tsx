import React, { FC, memo, ReactElement, useCallback } from 'react';

import { Button } from '@material-ui/core';

export const Product: FC<ProductPropsType> = memo(
  ({ photo, addInCart, name, price }): ReactElement => {
    const onAddInCartClick = useCallback(() => {
      addInCart();
    }, [addInCart]);

    return (
      <div style={{ padding: '20px' }}>
        <img
          src={photo}
          alt="product_photo"
          style={{ width: '300px', height: '300px' }}
        />
        <p>{name}</p>
        <h3>{price}</h3>
        <Button variant="contained" color="primary" onClick={onAddInCartClick}>
          buy
        </Button>
      </div>
    );
  },
);

// Types
export type ProductPropsType = {
  name: string;
  photo: string;
  price: number;
  addInCart: () => void;
};
