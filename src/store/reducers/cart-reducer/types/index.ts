import { ProductType } from 'api';

export type InitCartType = {
  sumPrice: number;
  cartContents: Array<ProductType>;
  isPurchaseMade: boolean;
};
