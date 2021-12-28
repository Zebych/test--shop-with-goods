import { ProductObjType } from 'api';

export type InitCartType = {
  sumPrice: number;
  cartContents: Array<ProductObjType>;
  isPurchaseMade: boolean;
};
