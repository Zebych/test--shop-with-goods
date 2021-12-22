import { axiosConfig } from './apiConfig';
import { ProductObjType } from './types';

import { FormikErrorType } from 'components';

export const API = {
  getGoodsAll() {
    return axiosConfig.get<Array<ProductObjType>>('/test--shop-with-goods');
  },
  postPurchases(addedCart: Array<ProductObjType>, values: FormikErrorType) {
    return axiosConfig.post<boolean>('/cart', {
      addedCart,
      values,
    });
  },
};
