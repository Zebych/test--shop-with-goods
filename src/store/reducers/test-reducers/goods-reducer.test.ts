import { ResDatatype } from '03_inquiries';

import { goodsAllTC } from '../goods-reducer';
import { goodsReducer } from '../goods-reducer/goods-reducer';

import photo1 from 'assets/img/mugMickeyMouse.jpg';

const startState: ResDatatype = { result: '', data: [] };

test('request an array of all data', () => {
  const param = {
    data: [{ name: 'mug1', photo: photo1, id: 1, price: 50, toPurchase: 1, inStock: 10 }],
  };
  const action = goodsAllTC.fulfilled(param, 'goods/goodsAll', 1);

  const endState = goodsReducer(startState, action);

  expect(endState).toEqual({
    result: '',
    data: [{ name: 'mug1', photo: photo1, id: 1, price: 50, toPurchase: 1, inStock: 10 }],
  });
});
