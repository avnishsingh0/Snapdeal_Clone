
import { createSlice } from '@reduxjs/toolkit';


export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST:
      return { ...state, isLoading: true };
    case GET_CART_SUCCESS:
      return { ...state, isLoading: false, carts: payload };
    case GET_CART_ERROR:
      return { ...state, isLoading: false, isError: true };
    case DELETE_CART_SUCCESS:
      return { ...state, carts: state.carts.filter((el) => el.id !== payload.id) };
    case POST_CART_REQUEST:
        return {...state,isLoading:true}
    case POST_CART_SUCCESS:
        return {...state,isLoading:false,isError:false}
    case POST_CART_FAILURE:
        return {...state,isLoading:false,isError:true}
    default:
      return state;
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;

