import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_FILTER,

} from "./actionTypes";
import axios from "axios";

export const getProductRequestObj = () => {
  return { type: GET_PRODUCT_REQUEST };
};

export const getProductSuccessObj = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

export const getSingleProductSuccessObj = (payload) => {
  return { type: GET_SINGLE_PRODUCT_SUCCESS, payload };
};

export const getProductErrorObj = () => {
  return { type: GET_PRODUCT_ERROR };
};

export const updateFilter = ({ minPrice, maxPrice }) => ({
  type: UPDATE_FILTER,
  payload: { minPrice, maxPrice },
});



export const getProducts = (obj) => (dispatch) => {
  dispatch(getProductRequestObj());
  axios
    .get("http://localhost:8080/products",obj)
    .then((res) => {
      dispatch(getProductSuccessObj(res.data));
    })
    .catch(() => {
      dispatch(getProductErrorObj());
    });
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch(getProductRequestObj());
  axios
    .get(`http://localhost:8080/products/${id}`)
    .then((res) => {
      dispatch(getSingleProductSuccessObj(res.data));
    })
    .catch(() => {
      dispatch(getProductErrorObj());
    });
};
