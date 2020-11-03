import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //HIDES CART
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            };
        //ADDS ITEM TO CART
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //deposit whatever item into the payload and cartItems array
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    //if cartItem.id does not matches action.payload.id then keep, if == then filter out
                    cartItem => cartItem.id !== action.payload.id 
                )
            };
        default:
            return state;
    }
}

export default cartReducer