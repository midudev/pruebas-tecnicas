import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { BookItemComponent } from '../BookItemComponent/BookItemComponent';
import './BookGridComponent.css';

export const BookGridComponent = ({ bookList }) => {
    const [filteredBooks, setFilteredBooks] = useState(bookList);
    //Contadores por género
    const [fantasia, setFantasia] = useState(0);
    const [cienciaFiccion, setCienciaFiccion] = useState(0);
    const [zombies, setZombies] = useState(0);
    const [terror, setTerror] = useState(0);
    //Filtros
    const [filter, setFilter] = useState('Todos');
    const [pageRange, setPageRange] = useState({ min: 0, max: 0 });

    useEffect(() => {
        const maxPageCount = getMaxPageCount();
        setPageRange([0, maxPageCount]);
    }, []);

    useEffect(() => {
        const fantasia = filteredBooks.filter((book) => book.book.genre === 'Fantasía').length;
        setFantasia(fantasia);
        const cienciaFiccion = filteredBooks.filter((book) => book.book.genre === 'Ciencia ficción').length;
        setCienciaFiccion(cienciaFiccion);
        const zombies = filteredBooks.filter((book) => book.book.genre === 'Zombies').length;
        setZombies(zombies);
        const terror = filteredBooks.filter((book) => book.book.genre === 'Terror').length;
        setTerror(terror);
    }, [filteredBooks]);
    useEffect(() => {
        const filteredBooks = filterBooksByPageRangeAndGenre();
        setFilteredBooks(filteredBooks);
    }, [pageRange, filter]);

    function getMaxPageCount() {
        const maxPageCount = Math.max(...bookList.map((book) => book.book.pages));
        return maxPageCount;
    }

    function filterBooksByPageRangeAndGenre() {
        const filteredBooks = bookList.filter((book) => {
            const pageCount = book.book.pages;
            const minPage = pageRange[0];
            const maxPage = pageRange[1];
            const withinPageRange = pageCount >= minPage && pageCount <= maxPage;

            const genre = book.book.genre;
            const genreFilter = filter === 'Todos' || genre === filter;

            return withinPageRange && genreFilter;
        });

        return filteredBooks;
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="gridContainer">
            <div className="filter">
                <h1 className="title">Explorar todos los libros</h1>

                <div className="filterButtonContainer">
                    <div className="sidebarContainer">
                        <span className="sidebarTitle">Páginas</span>
                        <div className="sidebar">
                            <div className="sidebarMin">{pageRange[0]}</div>
                            <Slider
                                min={0}
                                max={getMaxPageCount()}
                                value={pageRange}
                                onChange={(values) => setPageRange(values)}
                                range
                            />
                            <div className="sidebarMax">{pageRange[1]}</div>
                        </div>

                    </div>

                    <select name="filter" id="filterSelect" className="filterSelect" onChange={handleFilterChange}>
                        <option value="Todos">Todos ({filteredBooks.length})</option>
                        <option value="Fantasía">Fantasía ({fantasia})</option>
                        <option value="Ciencia ficción">Ciencia Ficción ({cienciaFiccion})</option>
                        <option value="Zombies">Zombies ({zombies})</option>
                        <option value="Terror">Terror ({terror})</option>
                    </select>
                </div>
            </div>

            <div className="gridContainerInfo">
                <div className="disponibles">
                    Actualmente tenemos
                    <span className="disponiblesNumber"> {filteredBooks.length} </span> libros disponibles, ¡elige el tuyo!
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
