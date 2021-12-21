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
  toContentsOfCart,
  toTotalPriceProductsInCart,
} from 'store';

export const ProductsListContainer = (): ReactElement => {
  const productInCart = useAppSelector(toContentsOfCart);
  const totalPrise = useAppSelector(toTotalPriceProductsInCart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, [productInCart]);

  const subtractProduct = (id: number): void => {
    dispatch(subtractCart({ id }));
  };
  const deleteProduct = (id: number): void => {
    dispatch(deleteCart({ id }));
  };
  const addProduct = (id: number): void => {
    dispatch(addProductInCart({ id }));
  };

  return (
    <div>
      <div>
        <p>shopping list:</p>
        <div style={{ padding: '20px' }}>
          {productInCart.map(({ id, name, price, photo, toPurchase }) => (
            <ProductsList
              key={id}
              name={name}
              price={price}
              picture={photo}
              id={id}
              toPurchase={toPurchase}
              subtractProduct={subtractProduct}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
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
