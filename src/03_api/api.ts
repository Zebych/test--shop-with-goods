import axios from 'axios';

import { FormikErrorType } from '../01_userInterface';

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
  /*  getGoodsAll(response: number): any {
    return new Promise(res => {
      setTimeout(() => {
        if (response === 1) {
          res({
            result: 'success',
            data: arrData,
          });
        }
        res({ result: 'error', data: [] });
      }, 0);
    });
  },
  getCart(id: number): any {
    return new Promise(res => {
      setTimeout(() => {
        res(arrData.find(f => f.id === id));
      }, 0);
    });
  },
  postPurchases(addedCart: Array<ProductObjType>, values: FormikErrorType): any {
    purchasesData.push(addedCart, values);
    return new Promise(res => {
      setTimeout(() => {
        res({ result: 'true' });
      }, 0);
    });
  }, */
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
};
export type dataType = {
  name: string;
  picture: string;
  id: number;
  price: number;
};
