/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiRequests, ProductObjType, ResDatatype } from 'api';
import mug1 from 'assets/img/6-1000x1000.jpg';
import mug3 from 'assets/img/6064641689.jpg';
import mug2 from 'assets/img/680395566_w640_h640_kruzhka-s-prikolom.jpg';
import mug4 from 'assets/img/kruzhka_sgushchenka_img.webp';
import mug5 from 'assets/img/people_2_mug_chameleon_front_whitered_500.jpg';
import mug6 from 'assets/img/pic1white.jpg';
import mug7 from 'assets/img/product_57508_0_0_0.jpg';
import { totalPrice } from 'store/index';

const initGoodsState: ResDatatype = {
  result: '',
  data: [],
  imgArr: [
    { id: 1, photo: mug1 },
    { id: 2, photo: mug2 },
    { id: 3, photo: mug3 },
    { id: 4, photo: mug4 },
    { id: 5, photo: mug5 },
    { id: 6, photo: mug6 },
    { id: 7, photo: mug7 },
  ],
};

export const goodsAllTC = createAsyncThunk('goods/goodsAll', async (arg, thunkAPI) => {
  const { data } = await apiRequests.getGoodsAll();
  thunkAPI.dispatch(totalPrice());
  return { data };
});

const slice = createSlice({
  name: 'goods',
  initialState: initGoodsState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(goodsAllTC.fulfilled, (state, action) => {
      state.data = action.payload.data.map(
        (productData: ProductObjType): ProductObjType => {
          const indexPhoto = state.imgArr.find(img => img.id === productData.id);
          if (indexPhoto) {
            productData = { ...productData, photo: indexPhoto.photo };
          }
          return productData;
        },
      );
    });
  },
});
export const goodsReducer = slice.reducer;
