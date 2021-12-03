import {
  addProductInCart,
  cartClear,
  cartReducer,
  deleteCart,
  InitCartType,
  setBuy,
  setCart,
  subtractCart,
  totalPrice,
} from './cart-reducer';

const startState: InitCartType = {
  sumPrice: 0,
  addedCart: [
    { name: 'mug1', photo: 'photo1', id: 1, price: 100, toPurchase: 2, inStock: 10 },
    { name: 'mug7', photo: 'photo7', id: 7, price: 130, toPurchase: 1, inStock: 10 },
  ],
  conditionBuy: false,
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
  const action = setBuy({ result: true });

  const endState = cartReducer(startState, action);

  expect(endState.conditionBuy).toEqual(true);
});

test('clear cart', () => {
  const action = cartClear();

  const endState = cartReducer(startState, action);

  expect(endState.addedCart.length).toEqual(0);
});
