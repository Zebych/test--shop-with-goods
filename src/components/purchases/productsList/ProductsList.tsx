import React, { FC, memo, ReactElement } from 'react';

import { Button } from '@material-ui/core';

import { StartValue } from 'enums';

export const ProductsList: FC<ProductsListPropsType> = memo(
  ({
    picture,
    name,
    price,
    id,
    toPurchase,
    subtractProduct,
    deleteProduct,
    addProduct,
  }): ReactElement => {
    const onSubtractProductClick = (): void => {
      subtractProduct(id);
    };
    const onDeleteProductClick = (): void => {
      deleteProduct(id);
    };
    const onAddProductClick = (): void => {
      addProduct(id);
    };

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
          {toPurchase > StartValue.oneUnit ? (
            <Button variant="contained" color="primary" onClick={onSubtractProductClick}>
              -
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={onDeleteProductClick}>
              -
            </Button>
          )}
          <div style={{ padding: '10px' }}>{toPurchase}</div>
          <Button variant="contained" color="primary" onClick={onAddProductClick}>
            +
          </Button>
        </div>
      </div>
    );
  },
);

// Types
type ProductsListPropsType = {
  picture: string;
  name: string;
  price: number;
  id: number;
  toPurchase: number;
  subtractProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  addProduct: (id: number) => void;
};
