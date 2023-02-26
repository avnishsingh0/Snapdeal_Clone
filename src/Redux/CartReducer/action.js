import axios from "axios";
import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  DELETE_CART_SUCCESS,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  POST_CART_FAILURE,
 
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
export const deleteCartSuccessAction=(payload)=>{
  return {type:DELETE_CART_SUCCESS,payload}
}
export const postCartRequestAction=()=>{
  return {type:POST_CART_REQUEST}
}

export const postCartSuccessAction=(payload)=>{
  return {type:POST_CART_SUCCESS,payload}
}

export const postCartFailureAction=()=>{
  return {type:POST_CART_FAILURE}
}



export const getCart = (dispatch) => {
  dispatch(getCartProducreq());
  return axios
    .get("https://snapdeal.onrender.com/Cart")
    .then((res) => {
      dispatch(getCartProducsuc(res.data));
    })
    .catch((err) => {
      dispatch(getCartProduerror());
    });
};

export const deleteCart=(id,dispatch)=>{
  return axios.delete(`https://snapdeal.onrender.com/Cart/${id}`).then((res)=>{
      dispatch(deleteCartSuccessAction(id))
      getCart(id)
  })
}
export const addCart=(pay)=>(dispatch)=>{
  dispatch(postCartRequestAction())
  axios.post("https://snapdeal.onrender.com/order",pay).then((res)=>{
      dispatch(postCartSuccessAction(res.data))
  }).catch((err)=>{
      dispatch(postCartFailureAction())
  })
}