export type ProductsListPropsType = {
  picture: string;
  name: string;
  price: number;
  id: number;
  toPurchase: number;
  onDecreaseNumberOfProductsInCart: (id: number) => void;
  onRemoveProductFromCart: (id: number) => void;
  onAddProductInCart: (id: number) => void;
};
