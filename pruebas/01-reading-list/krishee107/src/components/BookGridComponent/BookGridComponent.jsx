import React from 'react'
import books from '../../../../books.json';
import { BookItemComponent } from '../BookItemComponent/BookItemComponent';
import './BookGridComponent.css';

export const BookGridComponent = ({ bookList }) => {
    return (
        <div className="gridContainer">
            <div className="filter">
                <h1 className='title'>Explorar</h1>
                <div className="filterButtonContainer">
                    <div className="filterButtonText">
                        Filtrar
                    </div>
                    <div className="filterButton">
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                    </div>
                </div>
            </div>


            <div className='bookGrid'>
                {bookList.length > 0 &&
                    books['library'].map((book, index) => (
                        <BookItemComponent key={index} book={book.book} />
                    ))}
            </div>
        </div>
    )
}
