import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../shared/types";

type ProductContextValue = {
  products: Product[];
  filteredData(productId?: number): Product | undefined;
  getProduct(): Promise<Product[]>;
  getProductByCategory(categoryId?: string): Promise<Product[]>;
};

const defaultProductContextValue: ProductContextValue = {
  products: [],
  filteredData: () => undefined,
  getProduct: async () => [],
  getProductByCategory: async () => [],
};

export const ProductContext = createContext<ProductContextValue>(
  defaultProductContextValue
);

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: React.FC<any> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProduct = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  };

  const getProductByCategory = async (
    categoryId?: string
  ): Promise<Product[]> => {
    const response = await axios.get<Product[]>(
      `https://fakestoreapi.com/products/category/${categoryId || ""}`
    );
    return response.data;
  };

  const filteredData = (productId?: number): Product | undefined => {
    return products.find((product) => product.id === productId);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProduct();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, filteredData, getProduct, getProductByCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
