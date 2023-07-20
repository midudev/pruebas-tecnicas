import { useState } from 'react'
import './Cart.css'
const Cart = ({ handleOpen }) => {
    const handleClick = () => {
        handleOpen()
    }
    return (
        <div className='wrapper' >
            <div className='cart' onClick={handleClick}>
                1
            </div>
        </div>
    )
}

export default Cart
