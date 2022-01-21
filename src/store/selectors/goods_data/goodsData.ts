import { ProductType } from 'api';
import { AppRootStateType } from 'store';

export const selectGoodsData = (state: AppRootStateType): ProductType[] =>
  state.goods.data;
