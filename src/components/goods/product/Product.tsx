import React, { FC, memo, ReactElement, useCallback } from 'react';

import { Button } from '@material-ui/core';

import { ProductPropsType } from './types';

export const Product: FC<ProductPropsType> = memo(
  ({ photo, onBuyProductButton, name, price }): ReactElement => {
    const onBuyProductButtonClick = useCallback(() => {
      onBuyProductButton();
    }, [onBuyProductButton]);

    return (
      <div style={{ padding: '20px' }}>
        <img
          src={photo}
          alt="product_photo"
          style={{ width: '300px', height: '300px' }}
        />
        <p>{name}</p>
        <h3>{price}</h3>
        <Button variant="contained" color="primary" onClick={onBuyProductButtonClick}>
          buy
        </Button>
      </div>
    );
  },
);
