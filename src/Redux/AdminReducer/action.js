import { Alert, AlertIcon, Stack } from "@chakra-ui/react"
import axios from "axios"
import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, LOGIN_PRODUCT_FAILURE, LOGIN_PRODUCT_REQUEST, LOGIN_PRODUCT_SUCCESS, ORDER_PRODUCT_FAILURE, ORDER_PRODUCT_REQUEST, ORDER_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionTypes"

export const postRequestAction=()=>{
    return {type:POST_PRODUCT_REQUEST}
}

export const postSuccessAction=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}

export const postFailureAction=()=>{
    return {type:POST_PRODUCT_FAILURE}
}

export const getRequestAction=()=>{
    return {type:GET_PRODUCT_REQUEST}
}

export const getSuccessAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

export const getFailureAction=()=>{
    return {type:GET_PRODUCT_FAILURE}
}

export const orderRequestAction=()=>{
    return {type:ORDER_PRODUCT_REQUEST}
}

export const orderSuccessAction=(payload)=>{
    return {type:ORDER_PRODUCT_SUCCESS,payload}
}

export const orderFailureAction=()=>{
    return {type:ORDER_PRODUCT_FAILURE}
}


export const deleteSuccessAction=(payload)=>{
    return {type:DELETE_PRODUCT_SUCCESS,payload}
}

const editProductSuccess = () => {
    return { type: EDIT_PRODUCT_SUCCESS };
  };

export const loginRequestAction=()=>{
    return {type:LOGIN_PRODUCT_REQUEST}
}

export const loginSuccessAction=(payload)=>{
    return {type:LOGIN_PRODUCT_SUCCESS,payload}
}

export const loginFailureAction=()=>{
    return {type:LOGIN_PRODUCT_FAILURE}
}


export const addProduct=(pay)=>(dispatch)=>{
    dispatch(postRequestAction())
    axios.post("https://snapdeal.onrender.com/products",pay).then((res)=>{
        // console.log("res:",res)
        dispatch(postSuccessAction(res.data))
    }).catch((err)=>{
        // console.log("err:",err)
        dispatch(postFailureAction())
    })
}


export const getProduct=(dispatch)=>{
    dispatch(getRequestAction());
    return axios.get("https://snapdeal.onrender.com/products").then((res)=>{
        // console.log("3232:",res.data)
        dispatch(getSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getFailureAction())
    })
}

export const getLogin=(dispatch)=>{
    dispatch(loginRequestAction());
    return axios.get("https://snapdeal.onrender.com/Seller").then((res)=>{
        // console.log("3232:",res.data)
        dispatch(loginSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(loginFailureAction())
    })
}

export const deleteProduct=(id,dispatch)=>{
    
    return axios.delete(`https://snapdeal.onrender.com/products/${id}`).then((res)=>{
        // console.log("3232ID:",id)
        
            
        dispatch(deleteSuccessAction(id))
        getProduct(id)
    })
}

export const orderProduct=(dispatch)=>{
    dispatch(orderRequestAction());
    return axios.get("https://snapdeal.onrender.com/Cart").then((res)=>{
        // console.log("3232:",res.data)
        dispatch(orderSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(orderFailureAction())
    })
}

export const editProduct = (id, ProductData) => (dispatch) => {
    return axios.patch(`http://localhost:8080/products/${id}`, ProductData).then(() => {
      dispatch(editProductSuccess());
    });
  };