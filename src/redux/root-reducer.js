//represents all of the state in the application
//combines all other states together

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = { 
    key: 'root',
    storage,
    //the only reducer that we want to reduce is the cart
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
    
})

//modified rootReducer with persistConfig on top
export default persistReducer(persistConfig, rootReducer);