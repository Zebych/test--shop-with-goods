export type ProductsListPropsType = {
  picture: string;
  name: string;
  price: number;
  id: number;
  toPurchase: number;
  subtractProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  addProduct: (id: number) => void;
};
