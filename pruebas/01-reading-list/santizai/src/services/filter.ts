import type { Library } from "../types/interfaces";

// Toma un array de ids para filtrar los libros que no esten en la lista de lectura pasada, si no están los devuelve para crear la lista de libros disponibles
export const filterForId = (ids: string[], books: Library[]) => {
    let result: Library[] = [];
    books.map((book: Library) => {
        if (!ids.includes(book.book.ISBN)) result.push(book);
    });
    return result;
};
