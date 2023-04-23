import { createContext } from "react";
import { CartItem } from "../../shared/types";

type CartContextType = {
  addToCart: (item: CartItem, qty: number) => void;
  showHideCart: () => void;
  removeItem: (id: string) => void;
  getQuantity: () => number;
  getProductQuantity: (id: string) => number;
  cartItems: CartItem[];
};

const defaultValue: CartContextType = {
    addToCart: function (item: CartItem, qty: number): void {
        throw new Error("Function not implemented.");
    },
    showHideCart: function (): void {
        throw new Error("Function not implemented.");
    },
    removeItem: function (id: string): void {
        throw new Error("Function not implemented.");
    },
    getQuantity: function (): number {
        throw new Error("Function not implemented.");
    },
    getProductQuantity: function (id: string): number {
        throw new Error("Function not implemented.");
    },
    cartItems: []
};

export const CartContext = createContext<CartContextType>(defaultValue);

export default CartContext;
