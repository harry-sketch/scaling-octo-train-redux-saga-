import { GET_PRODUCTS, SEARCH_PRODUCTS } from "../../types/actionTypes";

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const searchProducts = (payload) => {
  return {
    type: SEARCH_PRODUCTS,
    payload,
  };
};
