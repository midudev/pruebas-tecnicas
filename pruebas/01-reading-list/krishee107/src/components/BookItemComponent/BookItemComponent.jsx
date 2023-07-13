import React from 'react'
import './BookItemComponent.css';

export const BookItemComponent = ({ book }, key) => {
    return (
        <div key={key} className='bookItem'>
            <img className="bookCover" src={book.cover} alt={book.title} />
            <h2 className='bookTitle'>{book.title}</h2>
            <div className='bookAuthor'>
                Por <span className='bookAuthorName'>{book.author.name}</span>
            </div>
        </div>
    )
}
