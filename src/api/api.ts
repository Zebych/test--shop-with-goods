import axios from 'axios';

import { FormikErrorType } from 'components';

const instance = axios.create({
  baseURL: 'https://test-shop-az.herokuapp.com/',
});
export const API = {
  getGoodsAll() {
    return instance.get('/test--shop-with-goods');
  },
  postPurchases(addedCart: Array<ProductObjType>, values: FormikErrorType) {
    return instance.post('/cart', { addedCart, values });
  },
};

// Types
export type ProductObjType = {
  name: string;
  photo: string;
  id: number;
  price: number;
  toPurchase: number;
  inStock?: number;
};
export type ResDatatype = {
  result: string;
  data: Array<ProductObjType>;
  imgArr: Array<ImgObjType>;
};
export type dataType = {
  name: string;
  picture: string;
  id: number;
  price: number;
};
export type ImgObjType = {
  id: number;
  photo: string;
};
