import type { Library } from "../types/interfaces";

// Toma un array de ids para filtrar los libros que no esten en la lista de lectura pasada, si no están los devuelve para crear la lista de libros disponibles
export const filterForId = (ids: string[], books: Library[]) => {
    let result: Library[] = [];
    books.map((book: Library) => {
        if (!ids.includes(book.book.ISBN)) result.push(book);
    });
    return result;
};

// Dado un array de libros toma los generos para devolver un array de todos los géneros que hay en el array
export const obtainGenres = (books: Library[]) => {
    const genres: string[] = [];
    books.forEach((book: Library) => {
        !genres.includes(book.book.genre) && genres.push(book.book.genre);
    })
    return genres;
}