import { TYPES } from "@/Actions/ShoppingActions";

export const MenuInitialState = {
  products: [],
  cart: [],
};

export function ShoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload.products,
        cart: action.payload.cart,
      };
    }

    default:
      return state;
  }
}