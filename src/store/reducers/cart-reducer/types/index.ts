import { ProductType } from 'api';

export type InitCartType = {
  sumPrice: number;
  cartProducts: Array<ProductType>;
  isPurchaseMade: boolean;
};
