/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setAppStatus } from '../app-reducer/app-reducer';
import { totalPrice } from '../cart-reducer';

import { API, ProductType, InitGoodsStateType } from 'api';
import mug6 from 'assets/img/mugDrinkYourself.jpg';
import mug5 from 'assets/img/mugHot.jpg';
import mug1 from 'assets/img/mugMickeyMouse.jpg';
import mug2 from 'assets/img/mugMyCoffe.jpg';
import mug4 from 'assets/img/mugSgushchenka.webp';
import mug7 from 'assets/img/mugYouAreBest.jpg';
import mug3 from 'assets/img/mugYouAreMine.jpg';

const initGoodsState: InitGoodsStateType = {
  result: '',
  data: [],
  mugPhotos: [
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
  thunkAPI.dispatch(setAppStatus({ status: 'loading' }));
  const { data } = await API.getGoodsAll();
  thunkAPI.dispatch(totalPrice());
  thunkAPI.dispatch(setAppStatus({ status: 'succeeded' }));
  return { data };
});

const slice = createSlice({
  name: 'goods',
  initialState: initGoodsState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(goodsAllTC.fulfilled, (state, action) => {
      state.data = action.payload.data.map((productData: ProductType): ProductType => {
        const indexPhoto = state.mugPhotos.find(img => img.id === productData.id);
        if (indexPhoto) {
          productData = { ...productData, photo: indexPhoto.photo };
        }
        return productData;
      });
    });
  },
});
export const goodsReducer = slice.reducer;
