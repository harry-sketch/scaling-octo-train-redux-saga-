import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../types/actionTypes";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };

    case REMOVE_FROM_CART:
      const filteredList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartList: filteredList,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartList: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
