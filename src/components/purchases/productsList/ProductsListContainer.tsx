import React, { ReactElement, useEffect } from 'react';

import { ProductsList } from './ProductsList';

import { StartValue } from 'enums';
import {
  addProductInCart,
  deleteCart,
  subtractCart,
  totalPrice,
  useAppSelector,
  useAppDispatch,
  isInCart,
  totalPriceCarts,
} from 'store';

export const ProductsListContainer = (): ReactElement => {
  const productInCart = useAppSelector(isInCart);
  const totalPrise = useAppSelector(totalPriceCarts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, [productInCart]);

  const subtractProduct = (id: number): void => {
    dispatch(subtractCart({ id }));
  };
  const DeleteProduct = (id: number): void => {
    dispatch(deleteCart({ id }));
  };
  const AddProduct = (id: number): void => {
    dispatch(addProductInCart({ id }));
  };

  return (
    <div>
      <div>
        <p>shopping list:</p>
        <div style={{ padding: '20px' }}>
          {productInCart.map(product => (
            <ProductsList
              key={product.id}
              name={product.name}
              price={product.price}
              picture={product.photo}
              id={product.id}
              toPurchase={product.toPurchase}
              subtractProduct={subtractProduct}
              AddProduct={AddProduct}
              DeleteProduct={DeleteProduct}
            />
          ))}
        </div>
        <div>
          {totalPrise !== StartValue.emptyСart && (
            <span>amount to pay: {totalPrise}</span>
          )}
        </div>
      </div>
    </div>
  );
};
