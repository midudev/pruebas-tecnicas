import type { Library } from "../types/interfaces";

// Toma un array de ids para filtrar los libros que no esten en la lista de lectura pasada y los que esten, para luego devolver un objeto para posteriormente elegir lo que se necesita
export const filterForId = (ids: string[], books: Library[]) => {
    let allBooks = {
        readList: [] as Library[],
        unread: [] as Library[],
    };
    books.map((book: Library) => {
        if (ids.includes(book.book.ISBN)) allBooks.readList.push(book);
        else allBooks.unread.push(book);
    });
    return allBooks;
};

export const findBook = (id: string, books: Library[]): Library | undefined => {
    return books.find((book: Library) => book.book.ISBN === id);
};

// Dado un array de libros toma los generos para devolver un array de todos los géneros que hay en el array
export const obtainGenres = (books: Library[]) => {
    const genres: string[] = [];
    books.forEach((book: Library) => {
        !genres.includes(book.book.genre) && genres.push(book.book.genre);
    });
    return genres;
};
