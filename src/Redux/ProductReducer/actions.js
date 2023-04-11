import axios from "axios";
import { getProductAPI } from "./api";
import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./products.types";


const productRequest = () => {
  console.log("hello ");
  return { type: PRODUCT_REQUEST };
};
const productError = () => {
  return { type: PRODUCT_ERROR };
};
const productSuccess = (payload) => {
  return { type:PRODUCT_SUCCESS, payload };
};

const getProducts = (field, params) => async (dispatch) => {
  dispatch(productRequest());
  try {
    let res = await getProductAPI(field, params);
    dispatch(productSuccess(res));
  } catch (error) {
    dispatch(productError());
  }
};



export { getProducts };
