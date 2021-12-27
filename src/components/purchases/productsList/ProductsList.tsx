import React, { FC, memo, ReactElement, useCallback } from 'react';

import { Button } from '@material-ui/core';

import { ProductsListPropsType } from './types';

import { IsInCart } from 'components/componentsEnums';

export const ProductsList: FC<ProductsListPropsType> = memo(
  ({
    picture,
    name,
    price,
    id,
    toPurchase,
    onDecreaseNumberOfProductsInCart,
    onRemoveProductFromCart,
    onAddProductInCart,
  }): ReactElement => {
    const onDecreaseNumberOfProductsInCartClick = useCallback((): void => {
      onDecreaseNumberOfProductsInCart(id);
    }, []);

    const onRemoveProductFromCartClick = useCallback((): void => {
      onRemoveProductFromCart(id);
    }, []);

    const onAddProductInCartClick = useCallback((): void => {
      onAddProductInCart(id);
    }, []);

    return (
      <div style={{ paddingBottom: '10px' }}>
        <img
          src={picture}
          alt="product_photo"
          style={{ width: '150px', height: '150px' }}
        />
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div style={{ display: 'flex' }}>
          {toPurchase > IsInCart.OneUnit ? (
            <Button
              variant="contained"
              color="primary"
              onClick={onDecreaseNumberOfProductsInCartClick}
            >
              -
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={onRemoveProductFromCartClick}
            >
              -
            </Button>
          )}
          <div style={{ padding: '10px' }}>{toPurchase}</div>
          <Button variant="contained" color="primary" onClick={onAddProductInCartClick}>
            +
          </Button>
        </div>
      </div>
    );
  },
);
