import React, { useEffect, useState } from 'react';
import { BookItemComponent } from '../BookItemComponent/BookItemComponent';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './BookGridComponent.css';
import { FilterComponent } from '../FilterComponent.jsx/FilterComponent';

export const BookGridComponent = ({ bookList }) => {
    const [filteredBooks, setFilteredBooks] = useState(bookList);
    //Contadores de género
    const [fantasia, setFantasia] = useState(0);
    const [cienciaFiccion, setCienciaFiccion] = useState(0);
    const [zombies, setZombies] = useState(0);
    const [terror, setTerror] = useState(0);
    const [filter, setFilter] = useState('Todos');
    const [pageRange, setPageRange] = useState({ min: 0, max: 0 });

    // Obtenemos el número máximo de páginas de todos los libros disponibles
    useEffect(() => {
        const maxPageCount = getMaxPageCount();
        setPageRange({ min: 0, max: maxPageCount });
    }, []);

    // Actualizamos los contadores de género cada vez que cambia el filtro
    useEffect(() => {
        const fantasiaCount = filteredBooks.filter((book) => book.book.genre === 'Fantasía').length;
        setFantasia(fantasiaCount);
        const cienciaFiccionCount = filteredBooks.filter((book) => book.book.genre === 'Ciencia ficción').length;
        setCienciaFiccion(cienciaFiccionCount);
        const zombiesCount = filteredBooks.filter((book) => book.book.genre === 'Zombies').length;
        setZombies(zombiesCount);
        const terrorCount = filteredBooks.filter((book) => book.book.genre === 'Terror').length;
        setTerror(terrorCount);
    }, [filteredBooks]);

    // Filtramos los libros por rango de páginas y género
    useEffect(() => {
        const filteredBooks = filterBooksByPageRangeAndGenre();
        setFilteredBooks(filteredBooks);
    }, [pageRange, filter]);

    // Obtenemos el número máximo de páginas de todos los libros disponibles
    function getMaxPageCount() {
        const maxPageCount = Math.max(...bookList.map((book) => book.book.pages));
        return maxPageCount;
    }

    // Filtramos los libros por rango de páginas y género
    function filterBooksByPageRangeAndGenre() {
        const filteredBooks = bookList.filter((book) => {
            const pageCount = book.book.pages;
            const minPage = pageRange.min;
            const maxPage = pageRange.max;
            const withinPageRange = pageCount >= minPage && pageCount <= maxPage;

            const genre = book.book.genre;
            const genreFilter = filter === 'Todos' || genre === filter;

            return withinPageRange && genreFilter;
        });

        return filteredBooks;
    }

    return (
        <div className="gridContainer">
            <FilterComponent
                pageRange={pageRange}
                setPageRange={setPageRange}
                filter={filter}
                setFilter={setFilter}
                filteredBooksCount={filteredBooks.length}
                fantasiaCount={fantasia}
                cienciaFiccionCount={cienciaFiccion}
                zombiesCount={zombies}
                terrorCount={terror}
                maxPageCount={getMaxPageCount()}
            />

            <div className="gridContainerInfo">
                <div className="disponibles">
                    Actualmente tenemos
                    <span className="disponiblesNumber"> {filteredBooks.length} </span> libros disponibles con un mínimo de <span className='minPag'>{pageRange.min}</span> páginas y  un máximo  de <span className='maxPag'>{pageRange.max}</span>, ¡elige el tuyo!
                </div>
                <div className="pendientes">
                    Actualmente tienes <span className="pendientesNumber">0</span> libros en tu lista de lectura
                </div>
            </div>

            <div className="bookGrid">
                {filteredBooks.length > 0 &&
                    filteredBooks.map((book, index) => {
                        if (filter === 'Todos' || book.book.genre === filter) {
                            return <BookItemComponent key={index} book={book.book} />;
                        }
                        return null;
                    })}
            </div>
        </div>
    );
};
