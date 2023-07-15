import BOOKS from './books.json';


export function getAllBooks(){

    return BOOKS.library;
}

export function getNumberOfBooks(){

    //return BOOKS.library.length;

    return BOOKS.total;
}

export function getAllGenres(){

    // const genres = new Set();

    // BOOKS.library.forEach(({book}) => {

    //     genres.add(book.genre);
    // });

    // return genres;

    return BOOKS.genres;
}
