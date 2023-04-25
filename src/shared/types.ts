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
  qty: number;
};

export type Image = {
  id: number;
  url: string;
  caption: string;
};

