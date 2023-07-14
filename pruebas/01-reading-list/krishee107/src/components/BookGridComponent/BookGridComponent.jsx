import React, { useEffect, useState } from 'react'
import books from '../../../../books.json';
import { BookItemComponent } from '../BookItemComponent/BookItemComponent';
import './BookGridComponent.css';

export const BookGridComponent = ({ bookList }) => {
    const [filter, setFilter] = useState('Todos');
    const [books, setBooks] = useState(bookList);


    const handleFilterChange = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value);
    }

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
                    <select name="filter" id="filterSelect" className="filterSelect" onChange={handleFilterChange}>
                        <option value="Todos">Todos </option>
                        <option value='Fantasía' >Fantasía</option>
                        <option value='Ciencia ficción' >Ciencia Ficción</option>
                        <option value="Zombies" >Zombies</option>
                        <option value="Terror" >Terror</option>
                    </select>
                </div>
            </div>


            <div className='bookGrid'>
                {books.length > 0 &&
                    books.map((book, index) => {
                        if (filter == 'Todos' || book.book.genre == filter) {
                            return <BookItemComponent key={index} book={book.book} />
                        }
                    })
                }
            </div>
        </div>
    )
}
