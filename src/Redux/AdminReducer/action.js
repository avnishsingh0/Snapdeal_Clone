import { Alert, AlertIcon, Stack } from "@chakra-ui/react"
import axios from "axios"
import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionTypes"

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


export const deleteSuccessAction=(payload)=>{
    return {type:DELETE_PRODUCT_SUCCESS,payload}
}


export const addProduct=(pay)=>(dispatch)=>{
    dispatch(postRequestAction())
    axios.post("http://localhost:8080/products",pay).then((res)=>{
        // console.log("res:",res)
        dispatch(postSuccessAction(res.data))
    }).catch((err)=>{
        // console.log("err:",err)
        dispatch(postFailureAction())
    })
}


export const getProduct=(dispatch)=>{
    dispatch(getRequestAction());
    return axios.get("http://localhost:8080/products").then((res)=>{
        // console.log("3232:",res.data)
        dispatch(getSuccessAction(res.data))
    }).catch((err)=>{
        dispatch(getFailureAction())
    })
}

export const deleteProduct=(id,dispatch)=>{
    
    return axios.delete(`http://localhost:8080/products/${id}`).then((res)=>{
        // console.log("3232ID:",id)
        
            
        dispatch(deleteSuccessAction(id))
        getProduct(id)
    })
}