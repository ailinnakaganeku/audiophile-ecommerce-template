export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

export type Image = {
  id: number;
  url: string;
  caption: string;
};

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
};
