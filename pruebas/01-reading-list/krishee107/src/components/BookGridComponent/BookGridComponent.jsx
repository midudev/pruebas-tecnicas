import React, { useEffect, useState } from 'react'
import books from '../../../../books.json';
import { BookItemComponent } from '../BookItemComponent/BookItemComponent';
import './BookGridComponent.css';

export const BookGridComponent = ({ bookList }) => {
    const [filter, setFilter] = useState('Todos');
    const [books, setBooks] = useState(bookList);
    //Contamos cuantos libros de cada tipo hay
    const [fantasia, setFantasia] = useState(0);
    const [cienciaFiccion, setCienciaFiccion] = useState(0);
    const [zombies, setZombies] = useState(0);
    const [terror, setTerror] = useState(0);

    useEffect(() => {
        books.map((book) => {
            if (book.book.genre == 'Fantasía') {
                setFantasia(fantasia + 1);
            } else if (book.book.genre == 'Ciencia ficción') {
                setCienciaFiccion(cienciaFiccion + 1);
            } else if (book.book.genre == 'Zombies') {
                setZombies(zombies + 1);
            } else if (book.book.genre == 'Terror') {
                setTerror(terror + 1);
            }
        })

        setFantasia(books.filter((book) => book.book.genre == 'Fantasía').length);
        setCienciaFiccion(books.filter((book) => book.book.genre == 'Ciencia ficción').length);
        setZombies(books.filter((book) => book.book.genre == 'Zombies').length);
        setTerror(books.filter((book) => book.book.genre == 'Terror').length);

    }, [books])

    useEffect(() => {
        console.log(fantasia);
        console.log(cienciaFiccion);
        console.log(zombies);
        console.log(terror);
    }, [fantasia, cienciaFiccion, zombies, terror])


    const handleFilterChange = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value);
    }

    return (
        <div className="gridContainer">
            <div className="filter">
                <h1 className='title'>
                    Explorar todos los libros
                </h1>

                <div className="filterButtonContainer">
                    <select name="filter" id="filterSelect" className="filterSelect" onChange={handleFilterChange}>
                        <option value="Todos">Todos ({books.length})</option>
                        <option value='Fantasía' >Fantasía ({fantasia})</option>
                        <option value='Ciencia ficción' >Ciencia Ficción ({cienciaFiccion})</option>
                        <option value="Zombies" >Zombies ({zombies})</option>
                        <option value="Terror" >Terror ({terror})</option>
                    </select>
                </div>
            </div>

            <div className="gridContainerInfo">
                <div className="disponibles">Actualmente tenemos
                    <span className="disponiblesNumber"> {books.length} </span> libros disponibles, ¡elige el tuyo!
                </div>
                <div className="pendientes">
                    Actualmente tienes  <span className="pendientesNumber"> 0 </span> libros en tu lista de lectura
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
