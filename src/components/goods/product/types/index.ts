import { ProductObjType } from 'api';

export type ProductContainerPropsType = {
  id: number;
  name: string;
  photo: string;
  price: number;
};
export type ReturnBuyProductButtonType =
  | undefined
  | { payload: { id: number } }
  | { payload: { addProduct: ProductObjType } };

export type ProductPropsType = {
  name: string;
  photo: string;
  price: number;
  onBuyProductButton: () => void;
};
