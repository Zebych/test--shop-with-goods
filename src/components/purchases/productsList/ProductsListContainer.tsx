import React, { ReactElement, useEffect } from 'react';

import { ProductsList } from './ProductsList';

import { IsInCart } from 'enum';
import {
  addProductInCart,
  deleteCart,
  subtractCart,
  totalPrice,
  useAppSelector,
  useAppDispatch,
  getCartContents,
  getSumPrice,
} from 'store';

export const ProductsListContainer = (): ReactElement => {
  const dispatch = useAppDispatch();

  const productInCart = useAppSelector(getCartContents);
  const totalPrise = useAppSelector(getSumPrice);

  useEffect(() => {
    dispatch(totalPrice());
  }, [productInCart]);

  const handleRemoveProductInCart = (id: number): void => {
    dispatch(subtractCart({ id }));
  };

  const handleDeleteProductFromCart = (id: number): void => {
    dispatch(deleteCart({ id }));
  };

  const handleAddItemToCart = (id: number): void => {
    dispatch(addProductInCart({ id }));
  };

  return (
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
            onRemoveProductInCart={handleRemoveProductInCart}
            onAddItemToCart={handleAddItemToCart}
            onDeleteProductFromCart={handleDeleteProductFromCart}
          />
        ))}
      </div>
      <div>
        {totalPrise !== IsInCart.Empty && <span>amount to pay: {totalPrise}</span>}
      </div>
    </div>
  );
};
