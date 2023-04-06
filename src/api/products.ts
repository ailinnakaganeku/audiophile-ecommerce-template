import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export async function getProduct(productId: number): Promise<Product> {
  const response = await axios.get<Product>(
    `https://fakestoreapi.com/products/1`
  );
  return response.data;
}
