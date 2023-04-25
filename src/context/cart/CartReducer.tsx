import { CartItem, Product } from "../../shared/types";

const MAX_STOCK = 9;

type State = {
  showCart: boolean;
  cartItems: CartItem[];
  totalPrice: number;
  showErrorMessage: string;
};

type Action =
  | { type: "SHOW_HIDE_CART" }
  | { type: "ADD_TO_CART"; payload: { product: Product; qty: number } }
  | { type: "REMOVE_ITEM"; payload: number };

const CartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SHOW_HIDE_CART": {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }

    case "ADD_TO_CART": {
      const { payload } = action;
      const item = state.cartItems.find(
        (product) => product.product.id === payload.product.id
      );

      if (item) {
        if (payload.qty + item.qty <= MAX_STOCK) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.product.id === payload.product.id
                ? {
                    ...item,
                    qty: item.qty + payload.qty,
                  }
                : item
            ),
            totalPrice: state.totalPrice + payload.product.price,
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.product.id === payload.product.id
                ? {
                    ...item,
                    qty: item.qty,
                  }
                : item
            ),
            showErrorMessage: "Out of stock",
            totalPrice: state.totalPrice + payload.product.price,
          };
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
          totalPrice: state.totalPrice + payload.product.price,
        };
      }
    }

    case "REMOVE_ITEM": {
      const { payload } = action;
      const item = state.cartItems.find(
        (product) => product.product.id === payload
      );
      if (item && item.qty > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === payload
              ? {
                  ...item,
                  qty: item.qty - 1,
                }
              : item
          ),
          totalPrice: state.totalPrice - item.product.price,
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.product.id !== payload
          ),
          totalPrice: state.totalPrice,
        };
      }
    }

    default:
      return state;
  }
};

export default CartReducer;
