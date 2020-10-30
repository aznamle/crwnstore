//represents all of the state in the application
//combines all other states together

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers ({
    //object user that points to userReducer js file
    user: userReducer,
    cart: cartReducer
}); 