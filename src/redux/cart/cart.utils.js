export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        //return a new version of the state
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem    
            )
    }
    
    return [ ...cartItems, {...cartItemToAdd, quantity: 1 }]

};

