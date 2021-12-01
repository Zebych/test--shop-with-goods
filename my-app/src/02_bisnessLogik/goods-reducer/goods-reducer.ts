import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { totalPrice } from '02_bisnessLogik';
import { ProductObjType, ResDatatype, serverAPI } from '03_inquiries';

const initGoodsState: ResDatatype = {
  result: '',
  data: [],
};
const slice = createSlice({
  name: 'goods',
  initialState: initGoodsState,
  reducers: {
    goodsAll(state, action: PayloadAction<{ data: Array<ProductObjType> }>) {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload.data;
    },
  },
});
export const goodsReducer = slice.reducer;

// Actions
const { goodsAll } = slice.actions;

// Thunk
export const goodsAllTC = (num: number) => (dispatch: Dispatch) => {
  serverAPI.getGoodsAll(num).then((res: any) => {
    dispatch(goodsAll({ data: res.data }));
    dispatch(totalPrice());
  });
};
