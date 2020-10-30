import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})


// path of addItem action:
// collection-item.js onclick({addItem}) -> cart.action.js -> carts.reducer.js (case ADD_ITEM)
