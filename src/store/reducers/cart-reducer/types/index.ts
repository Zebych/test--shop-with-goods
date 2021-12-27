import { ProductObjType } from 'api';

export type InitCartType = {
  sumPrice: number;
  addedCart: Array<ProductObjType>;
  isPurchaseMade: boolean;
};
