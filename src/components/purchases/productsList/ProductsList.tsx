import React, { FC, memo, ReactElement, useCallback } from 'react';

import { Button } from '@material-ui/core';

import { ProductsListPropsType } from './types';

import { IsInCart } from 'enum';

export const ProductsList: FC<ProductsListPropsType> = memo(
  ({
    picture,
    name,
    price,
    id,
    toPurchase,
    onRemoveProductInCart,
    onDeleteProductFromCart,
    onAddItemToCart,
  }): ReactElement => {
    const onRemoveProductInCartClick = useCallback((): void => {
      onRemoveProductInCart(id);
    }, [id]);

    const onDeleteProductFromCartClick = useCallback((): void => {
      onDeleteProductFromCart(id);
    }, [id]);

    const onAddItemToCartClick = useCallback((): void => {
      onAddItemToCart(id);
    }, [id]);

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
              onClick={onRemoveProductInCartClick}
            >
              -
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={onDeleteProductFromCartClick}
            >
              -
            </Button>
          )}
          <div style={{ padding: '10px' }}>{toPurchase}</div>
          <Button variant="contained" color="primary" onClick={onAddItemToCartClick}>
            +
          </Button>
        </div>
      </div>
    );
  },
);
