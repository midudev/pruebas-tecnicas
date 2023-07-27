

import data from '../../books.json';

// Definición de tipos de acciones
export const GET_BOOKS = "GET_BOOKS";
export const ADD_TOREAD = "ADD_TOREAD";
export const REMOVE_TOREAD = "REMOVE_TOREAD";
export const FILTER = "FILTER";

export const FILTER_PAGES = "FILTER_PAGES";

// Acción para obtener la lista de libros
export function getBooks() {
    // Extraemos los libros del archivo JSON importado
    const books = data.library.map((book) => book.book);

    return {
        type: GET_BOOKS,
        payload: books
    };
}

// Acción para añadir un libro a la lista de "Para leer"
export function addToRead(book) {
    console.log("action", book); // Mensaje de depuración para verificar el libro que se está agregando

    return {
        type: ADD_TOREAD,
        payload: book
    };
}

// Acción para eliminar un libro de la lista de "Para leer"
export function removeToRead(book) {
    return {
        type: REMOVE_TOREAD,
        payload: book
    };
}

// Acción para filtrar libros por género
export function filterBooks(genre) {
    return {
        type: FILTER,
        payload: genre
    };
}





// Acción para filtrar libros por cantidad de páginas
export function filterPages(pages) {
    return {
        type: FILTER_PAGES,
        payload: pages
    };
}
