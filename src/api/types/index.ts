export type ProductObjType = {
  name: string;
  photo: string;
  id: number;
  price: number;
  toPurchase: number;
  inStock?: number;
};

export type ResDatatype = {
  result: string;
  data: Array<ProductObjType>;
  imgArr: Array<ImgObjType>;
};

export type ImgObjType = {
  id: number;
  photo: string;
};
