import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./AdminReducer/reducer";
import { reducer as ProductReducer } from './ProductReducer/reducer'
 
 const rootReducer = combineReducers({
    ProductReducer,
    AdminReducer
 })


// import {reducer as AuthReducer} from './AuthReducer/reducer'
// import {reducer as ProductReducer} from './ProductReducer/reducer'


// const rootReducer=combineReducers({ProductReducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

