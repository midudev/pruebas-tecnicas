
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



export function getBooksByISBN(ISBN){

    return BOOKS.library.filter(({book}) => {

        return book.ISBN === ISBN;
    })
}

export function getBooksByGenre(genre){

    return BOOKS.library.filter(({book}) => {

        return book.genre === genre;
    })
}


const COMPARATORS = {

    genre: (book, genre) => {

        if(genre.match(/Todos/i)) return true;//<---

        return book.genre === genre;
    },

    pages: (book, pages) => {

        pages = Number(pages);

        return book.pages <= pages;
    }
}

export function getBooksBy(query = {}){

    const queries = Object.entries(query);

    if(queries.length === 0) return BOOKS.library;


    return BOOKS.library.filter(({book}) => {

        let flag = true;

        queries.forEach(([key, value]) => {

            const compareFn = COMPARATORS[key];

            if(compareFn && value){

                flag &&= compareFn(book, value);
            }
        })

        return flag;
    });
}