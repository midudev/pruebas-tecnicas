import { useState } from 'react'
import './Cart.css'
const Cart = ({ handleOpen, cartItems }) => {
    const handleClick = () => {
        handleOpen()
    }
    return (
        <div className='wrapper' >
            <span>Reading List</span>
            <div className='cart' onClick={handleClick}>
                {cartItems}
            </div>
        </div>
    )
}

export default Cart
