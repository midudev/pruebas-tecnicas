import React from 'react'
import './ListCart.css'
const ListCart = ({ cartBooks, handleRemoveBooks }) => {
    const handleRemove = (book) => {
        handleRemoveBooks(book)
    }
    return (
        <div className='container'>
            <ul className='container-card'>
                {cartBooks.map(book => (
                    <li className='card' key={book.book.ISBN} onClick={() => handleRemove(book)}>
                        <h3 className='title'>{book.title}</h3>
                        <img src={book.book.cover} alt="book cover" className='image-book' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListCart
