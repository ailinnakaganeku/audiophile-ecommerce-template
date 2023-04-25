import { useReducer, ReactNode } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "./Types";
import { CartItem, Product } from "../../shared/types";

interface CartStateProps {
  children: ReactNode;
}

interface CartStateType {
  showCart: boolean;
  cartItems: CartItem[];
  totalPrice: number;
  showErrorMessage: string;
}

interface CartContextType extends CartStateType {
  addToCart: (product: Product, qty: number) => void;
  showHideCart: () => void;
  removeItem: (id: number) => void;
  getQuantity: () => number;
  getProductQuantity: (id: number) => number;
  cartItems: CartItem[];
}

const CartState = ({ children }: CartStateProps): JSX.Element => {
  const initalState: CartStateType = {
    showCart: false,
    cartItems: [],
    totalPrice: 0,
    showErrorMessage: "",
  };
  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (product: Product, qty: number): void => {
    const item: CartItem = { product, qty };
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = (): void => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id: number): void => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const getQuantity = (): number => {
    return state.cartItems.reduce((total, item) => total + item.qty, 0);
  };

  const getProductQuantity = (id: number): number => {
    const item = state.cartItems.find((e) => e.product.id === id);
    return item ? item.qty : 0;
  };

  const contextValue: CartContextType = {
    ...state,
    addToCart,
    showHideCart,
    removeItem,
    getQuantity,
    getProductQuantity,
    cartItems: state.cartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartState;
