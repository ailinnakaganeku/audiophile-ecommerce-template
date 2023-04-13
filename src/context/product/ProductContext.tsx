import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import axios, { AxiosResponse } from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface ProductContextValue {
  products: Product[];
  filteredData: (productId?: number) => Product | undefined;
}

export const ProductContext = createContext<ProductContextValue>({
  products: [],
  filteredData: () => undefined,
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: React.FC<any> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProduct = useCallback(async (): Promise<
    AxiosResponse<Product[]>
  > => {
    const response = await axios.get<Product[]>(
      `https://fakestoreapi.com/products`
    );
    return response;
  }, []);

  const filteredData = useCallback(
    (productId?: number) => {
      return products.find((product) => product.id === productId);
    },
    [products]
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getProduct();
        setProducts(result.data);
      } catch (error) {
        console.log("Failed to fetch product details:", error);
      }
    };
    fetchProduct();
  }, [getProduct]);

  return (
    <ProductContext.Provider value={{ products, filteredData }}>
      {children}
    </ProductContext.Provider>
  );
};
