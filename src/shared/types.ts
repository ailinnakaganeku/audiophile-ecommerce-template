export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Image = {
  id: string;
  url: string;
  caption: string;
};

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
};
