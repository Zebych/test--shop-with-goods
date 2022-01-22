import { ProductType } from 'api';

export type InitCartType = {
  sumPrice: number;
  cartProducts: ProductType[];
  isPurchaseMade: boolean;
};
