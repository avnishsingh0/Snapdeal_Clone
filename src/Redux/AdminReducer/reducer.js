import { POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, ORDER_PRODUCT_REQUEST, ORDER_PRODUCT_SUCCESS, ORDER_PRODUCT_FAILURE, EDIT_PRODUCT_SUCCESS, LOGIN_PRODUCT_REQUEST, LOGIN_PRODUCT_SUCCESS, LOGIN_PRODUCT_FAILURE } from "./actionTypes";


const initialState={
    products:[],
    isLoading:false,
    isError:false,
    data:[],
    cart:[]
}

export const reducer=(state=initialState,{type,payload})=>{
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

        case LOGIN_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case LOGIN_PRODUCT_SUCCESS:
            return {...state,isLoading:false,isError:false,data:payload}
        case LOGIN_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}
        case ORDER_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case ORDER_PRODUCT_SUCCESS:
            return {...state,isLoading:false,isError:false,cart:payload}
        case ORDER_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}
        case EDIT_PRODUCT_SUCCESS:
                return { ...state, isLoading: false };
        case DELETE_PRODUCT_SUCCESS:
            return {...state,products:state.products.filter((el)=>el.id!==payload)}
        
        default:
            return state;
    }
}