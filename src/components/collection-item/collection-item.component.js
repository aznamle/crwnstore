import React from 'react'
import { connect } from 'react-redux'


import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {

    const { name, price, imageUrl } = item;

    return (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton 
            onClick={() => addItem(item)} 
            inverted
        > 
            Add to cart
        </CustomButton>
    </div>
)}


const mapDispatchtoProps = dispatch => ({
    //creating a new function that is a prop called addItem that will go into CollectItem as addItem function that we leverage
    addItem: item => dispatch(addItem(item))
})

export default connect( 
    null,
    mapDispatchtoProps)
    (CollectionItem)