import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchtoProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//selector function
//gets a state and just pulls off just a small portion or slice of that state 
//computing a new value based off of the state 
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps, 
    mapDispatchtoProps
    )(CartIcon);