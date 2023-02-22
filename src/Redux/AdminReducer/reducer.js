import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "./actionTypes";


const initialState={
    products:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,{type,payload})=>{
    console.log("payload1:",payload)
    console.log("state:",state)
    switch(type){
        
        case POST_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case POST_PRODUCT_SUCCESS:
            return {...state,isLoading:false,isError:false}
        case POST_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}
        case GET_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,isError:false,products:payload}
        case GET_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}
        
        case DELETE_PRODUCT_SUCCESS:
            return {...state,products:state.products.filter((el)=>el.id!==payload)}
        
        default:
            return state;
    }
}