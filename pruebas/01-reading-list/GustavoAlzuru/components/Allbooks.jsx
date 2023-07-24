import React from 'react'
import Book from './Book'
import './Allbooks.css'

const Allbooks = ({ books, handleBooks }) => {
    const handleClick = (book) => {
        handleBooks(book)
    }
    return (
        <div className='books-data'>
            {books.map((book, index) => (
                <ul key={index} onClick={() => handleClick(book)}>
                    <Book data={book} />
                </ul>
            ))}
        </div>
    )
}

export default Allbooks
