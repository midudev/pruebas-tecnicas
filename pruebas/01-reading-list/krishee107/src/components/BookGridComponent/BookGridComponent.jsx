import React from 'react'
import books from '../../../../books.json';
import { BookItemComponent } from '../BookItemComponent/BookItemComponent';
import './BookGridComponent.css';

export const BookGridComponent = ({ bookList }) => {
    return (
        <>
            <h1>Reading List</h1>
            <div className='bookGrid'>
                {bookList.length > 0 &&
                    books['library'].map((book, index) => (
                        <BookItemComponent key={index} book={book.book} />
                    ))}
            </div>
        </>
    )
}
