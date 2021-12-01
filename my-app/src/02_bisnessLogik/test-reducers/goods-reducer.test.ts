import { goodsAll } from '../goods-reducer';
import { goodsReducer } from '../goods-reducer/goods-reducer';

import { ResDatatype } from '03_inquiries';
import photo1 from '04_assets/img/6-1000x1000.jpg';

const startState: ResDatatype = { result: '', data: [] };

test('request an array of all data', () => {
  const action = goodsAll({
    data: [{ name: 'mug1', photo: photo1, id: 1, price: 50, toPurchase: 1, inStock: 10 }],
  });

  const endState = goodsReducer(startState, action);

  expect(endState).toEqual({
    result: '',
    data: [{ name: 'mug1', photo: photo1, id: 1, price: 50, toPurchase: 1, inStock: 10 }],
  });
});
