import { createContext } from "react";
import { CartItem, Product } from "../../shared/types";

type CartContextType = {
  addToCart: (product: Product, qty: number) => void;
  showHideCart: () => void;
  removeItem: (id: number) => void;
  getQuantity: () => number;
  getProductQuantity: (id: number) => number;
  cartItems: CartItem[];
};

const defaultValue: CartContextType = {
  addToCart: () => {},
  showHideCart: () => {},
  removeItem: () => {},
  getQuantity: () => 0,
  getProductQuantity: () => 0,
  cartItems: [],
};

export const CartContext = createContext<CartContextType>(defaultValue);

export default CartContext;
