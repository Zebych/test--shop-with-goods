export type ProductsListPropsType = {
  picture: string;
  name: string;
  price: number;
  id: number;
  toPurchase: number;
  onRemoveProductInCart: (id: number) => void;
  onDeleteProductFromCart: (id: number) => void;
  onAddItemToCart: (id: number) => void;
};
