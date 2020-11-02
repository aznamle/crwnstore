import { createSelector } from 'reselect';

//2 types of selectors:
//input selector
//output selector

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 
        0
    )
);