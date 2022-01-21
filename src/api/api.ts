import { axiosConfig } from './apiConfig';
import { ProductType } from './types';

import { FormikValuesType } from 'components';
import { NavigatePath } from 'enum';

export const API = {
  getGoodsAll() {
    return axiosConfig.get<ProductType[]>(NavigatePath.Goods);
  },
  setPostPurchases(addedCart: ProductType[], values: FormikValuesType) {
    return axiosConfig.post<boolean>(NavigatePath.Cart, {
      addedCart,
      values,
    });
  },
};
