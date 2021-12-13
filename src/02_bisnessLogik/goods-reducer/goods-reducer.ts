import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { totalPrice } from '02_bisnessLogik';
import { API } from '03_api';
import { ResDatatype } from '03_inquiries';
import mug1 from '04_assets/img/6-1000x1000.jpg';
import mug3 from '04_assets/img/6064641689.jpg';
import mug2 from '04_assets/img/680395566_w640_h640_kruzhka-s-prikolom.jpg';
import mug4 from '04_assets/img/kruzhka_sgushchenka_img.webp';
import mug5 from '04_assets/img/people_2_mug_chameleon_front_whitered_500.jpg';
import mug6 from '04_assets/img/pic1white.jpg';
import mug7 from '04_assets/img/product_57508_0_0_0.jpg';

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

export const goodsAllTC = createAsyncThunk(
  'goods/goodsAll',
  async (num: number, thunkAPI) => {
    const { data } = await API.getGoodsAll();
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
      // Добавить картинки в вернувшийся массив
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload.data.map((sd: any): any => {
        const indexPhoto = state.imgArr.find(img => img.id === sd.id);
        if (indexPhoto) {
          // eslint-disable-next-line no-param-reassign
          sd = { ...sd, photo: indexPhoto.photo };
        }
        return sd;
      });
    });
  },
});
export const goodsReducer = slice.reducer;
