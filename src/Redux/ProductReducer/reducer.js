import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  products: [],
  isError: false,
  singleProduct:{}
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {...state,isLoading:false,singleProduct:payload}  

    case GET_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
