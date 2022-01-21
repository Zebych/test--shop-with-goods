export type ProductType = {
  name: string;
  photo: string;
  id: number;
  price: number;
  toPurchase: number;
  inStock?: number;
};

export type InitGoodsStateType = {
  result: string;
  data: ProductType[];
  mugPhotos: MugPhotoType[];
};

export type MugPhotoType = {
  id: number;
  photo: string;
};
