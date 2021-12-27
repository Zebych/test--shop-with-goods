/* eslint-disable @typescript-eslint/no-magic-numbers */

import { cartReducer } from '../cart-reducer/cart-reducer';

import {
  InitCartType,
  addProductInCart,
  buyTC,
  deleteCart,
  setCart,
  subtractCart,
  totalPrice,
} from 'store';

const startState: InitCartType = {
  sumPrice: 0,
  addedCart: [
    { name: 'mug1', photo: 'photo1', id: 1, price: 100, toPurchase: 2, inStock: 10 },
    { name: 'mug7', photo: 'photo7', id: 7, price: 130, toPurchase: 1, inStock: 10 },
  ],
  isPurchaseMade: false,
};

test('add object to shopping array', () => {
  const action = setCart({
    addProduct: {
      name: 'mug1',
      photo: 'photo1',
      id: 2,
      price: 50,
      toPurchase: 1,
      inStock: 10,
    },
  });

  const endState = cartReducer(startState, action);

  expect(endState.addedCart.length).toEqual(3);
  expect(endState.addedCart[2].id).toEqual(2);
});

test('remove object to shopping array', () => {
  const action = deleteCart({ id: 1 });

  const endState = cartReducer(startState, action);

  expect(endState.addedCart.length).toEqual(1);
  expect(endState.addedCart[0].id).toEqual(7);
});

test('calculate the amount of purchases', () => {
  const action = totalPrice();

  const endState = cartReducer(startState, action);

  expect(endState.sumPrice).toEqual(230);
});

test('subtract quantity from shopping list', () => {
  const action = subtractCart({ id: 1 });

  const endState = cartReducer(startState, action);

  expect(endState.addedCart[0].toPurchase).toEqual(1);
  expect(endState.addedCart[0].price).toEqual(50);
});

test('add quantity from shopping list', () => {
  const action = addProductInCart({ id: 1 });

  const endState = cartReducer(startState, action);

  expect(endState.addedCart[0].toPurchase).toEqual(3);
  expect(endState.addedCart[0].price).toEqual(150);
});

test('make a purchase', () => {
  const addedCart = [
    { name: 'mug5', photo: 'photo5', id: 5, price: 110, toPurchase: 1, inStock: 10 },
  ];
  const values = {
    firstLastName: 'Ivan·Ivanov',
    cardNumber: '0000 0000 0000 0000',
    expirationDate: '01/22',
    password: '111',
    rememberMe: true,
  };
  // @ts-ignore
  const action = buyTC.fulfilled({ addedCart, values }, 'cart/buy', {
    addedCart,
    values,
  });

  const endState = cartReducer(startState, action);

  expect(endState.addedCart.length).toBe(0);
  expect(endState.sumPrice).toBe(0);
});
