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
                    {/*<div className="filterButtonText">
                        Filtrar
                    </div>
                    <div className="filterButton">
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                    </div>*/}
                    <select name="filter" id="filterSelect" className="filterSelect">
                        <option value="all">Todos</option>
                        <option value='Fantasía'>Fantasía</option>
                        <option value='Ciencia Ficción'>Ciencia Ficción</option>
                        <option value="Zombies">Zombies</option>
                        <option value="Terror">Terror</option>
                    </select>
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
