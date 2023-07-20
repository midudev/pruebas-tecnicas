import React from 'react'
import Book from './Book'
import './Allbooks.css'

const Allbooks = ({ books }) => {
    return (
        <div className='books-data'>
            {books.map((book, index) => (
                <ul key={index}>
                    <Book data={book} />
                </ul>
            ))}
        </div>
    )
}

export default Allbooks
