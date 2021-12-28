import { ProductObjType } from 'api';

export type InitCartType = {
  sumPrice: number;
  containedInCarts: Array<ProductObjType>;
  isPurchaseMade: boolean;
};
