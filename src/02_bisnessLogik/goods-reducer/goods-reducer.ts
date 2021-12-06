import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { totalPrice } from '02_bisnessLogik';
import { ResDatatype, serverAPI } from '03_inquiries';

const initGoodsState: ResDatatype = {
  result: '',
  data: [],
};

export const goodsAllTC = createAsyncThunk(
  'goods/goodsAll',
  async (num: number, thunkAPI) => {
    const { data } = await serverAPI.getGoodsAll(num);
    thunkAPI.dispatch(totalPrice());
    return { data };
  },
);

const slice = createSlice({
  name: 'goods',
  initialState: initGoodsState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(goodsAllTC.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload.data;
    });
  },
});
export const goodsReducer = slice.reducer;
