import React, { memo, ReactElement, useEffect } from 'react';

import { ProductsList } from './ProductsList';

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

export const ProductsListContainer = memo((): ReactElement => {
  const productInCart = useAppSelector(isInCart);
  const amountOfPurchases = useAppSelector(totalPriceCarts);

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
          {productInCart.map(p => (
            <ProductsList
              key={p.id}
              name={p.name}
              price={p.price}
              picture={p.photo}
              id={p.id}
              toPurchase={p.toPurchase}
              subtractProduct={subtractProduct}
              AddProduct={AddProduct}
              DeleteProduct={DeleteProduct}
            />
          ))}
        </div>
        <div>
          {amountOfPurchases > 0 && <span>amount to pay: {amountOfPurchases}</span>}
        </div>
      </div>
    </div>
  );
});
