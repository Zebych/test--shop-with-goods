import React, { memo, ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ProductsList } from './ProductsLists';

import {
  addProductInCart,
  deleteCart,
  subtractCart,
  totalPrice,
} from '02_bisnessLogik/cart-reducer';
import { AppRootStateType } from '02_bisnessLogik/store';
import { ProductObjType } from '03_inquiries/server';

export const ProductsListContainer = memo((): ReactElement => {
  const productInCart = useSelector<AppRootStateType, Array<ProductObjType>>(
    state => state.cart.addedCart,
  );
  const amountOfPurchases = useSelector<AppRootStateType, number>(
    state => state.cart.sumPrice,
  );

  const dispatch = useDispatch();

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
