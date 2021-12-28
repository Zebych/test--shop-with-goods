import { axiosConfig } from './apiConfig';
import { ProductObjType } from './types';

import { FormikErrorType } from 'components';
import { NavigatePath } from 'enum';

export const apiRequests = {
  getGoodsAll() {
    return axiosConfig.get<Array<ProductObjType>>(NavigatePath.Goods);
  },
  setPostPurchases(addedCart: Array<ProductObjType>, values: FormikErrorType) {
    return axiosConfig.post<boolean>(NavigatePath.Cart, {
      addedCart,
      values,
    });
  },
};
