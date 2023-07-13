import React from 'react'
import './BookItemComponent.css';

export const BookItemComponent = ({ book }, key) => {
    return (
        <div key={key}>
            <img className="bookCover" src={book.cover} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.pages}</p>
            <p>{book.genre}</p>
        </div>
    )
}
