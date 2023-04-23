import { CartItem } from "../../shared/types";

const INITIAL_STOCK = 9;

type State = {
  showCart: boolean;
  cartItems: CartItem[];
  totalPrice: number;
  showErrorMessage: string;
};

type Action =
  | { type: "SHOW_HIDE_CART" }
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string };

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
        (product) => product._id === payload._id
      );

      if (item) {
        if (payload.qty + item.qty <= INITIAL_STOCK) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === payload._id
                ? {
                    ...item,
                    qty: item.qty + payload.qty,
                  }
                : item
            ),
            totalPrice: state.totalPrice + payload.price,
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === payload._id
                ? {
                    ...item,
                    qty: item.qty,
                  }
                : item
            ),
            showErrorMessage: "Out of stock",
            totalPrice: state.totalPrice + payload.price,
          };
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
          totalPrice: state.totalPrice + payload.price,
        };
      }
    }

    case "REMOVE_ITEM": {
      const { payload } = action;
      const item = state.cartItems.find((product) => product._id === payload);

      if (item && item.qty > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === payload
              ? {
                  ...item,
                  qty: item.qty - 1,
                }
              : item
          ),
          totalPrice: state.totalPrice - item.price,
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item._id !== payload),
          totalPrice: state.totalPrice,
        };
      }
    }

    default:
      return state;
  }
};

export default CartReducer;
