import { FETCH_PRODUCTS } from "../types/actionTypes";

const initialState = {
  data: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        data: [...action.data],
      };
    default:
      return state;
  }
};

export default productReducer;
