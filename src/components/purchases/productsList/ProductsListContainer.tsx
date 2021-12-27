import React, { ReactElement, useEffect } from 'react';

import { ProductsList } from './ProductsList';

import { IsInCart } from 'components';
import {
  addProductInCart,
  deleteCart,
  subtractCart,
  totalPrice,
  useAppSelector,
  useAppDispatch,
  getDataAboutContentsOfCart,
  toTotalPriceOfPlannedPurchases,
} from 'store';

export const ProductsListContainer = (): ReactElement => {
  const dispatch = useAppDispatch();

  const productInCart = useAppSelector(getDataAboutContentsOfCart);
  const totalPrise = useAppSelector(toTotalPriceOfPlannedPurchases);

  useEffect(() => {
    dispatch(totalPrice());
  }, [productInCart]);

  const handleDecreaseNumberOfProductsInCart = (id: number): void => {
    dispatch(subtractCart({ id }));
  };

  const handleRemoveProductFromCart = (id: number): void => {
    dispatch(deleteCart({ id }));
  };

  const handleAddProductInCart = (id: number): void => {
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
            onDecreaseNumberOfProductsInCart={handleDecreaseNumberOfProductsInCart}
            onAddProductInCart={handleAddProductInCart}
            onRemoveProductFromCart={handleRemoveProductFromCart}
          />
        ))}
      </div>
      <div>
        {totalPrise !== IsInCart.Empty && <span>amount to pay: {totalPrise}</span>}
      </div>
    </div>
  );
};
