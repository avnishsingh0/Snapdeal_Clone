import { GET_CART_ERROR, GET_CART_REQUEST, GET_CART_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    carts: [],
    isError: false,
  };

  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_CART_REQUEST:
        return { ...state, isLoading: true };
  
      case GET_CART_SUCCESS:
        return { ...state, isLoading: false, carts: payload };
  
      case GET_CART_ERROR:
        return { ...state, isLoading: false, isError: true };
  
      default:
        return state;
    }
  };