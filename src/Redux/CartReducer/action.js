import axios from "axios";
import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
 
} from "./actionTypes";

export const getCartProducreq = () => {
  return { type: GET_CART_REQUEST };
};
export const getCartProducsuc = (payload) => {
  return { type: GET_CART_SUCCESS, payload };
};
export const getCartProduerror = () => {
  return { type: GET_CART_ERROR };
};



export const getCart = (dispatch) => {
  dispatch(getCartProducreq());
  return axios
    .get("http://localhost:8080/products")
    .then((res) => {
      dispatch(getCartProducsuc(res.data));
    })
    .catch((err) => {
      dispatch(getCartProduerror());
    });
};
