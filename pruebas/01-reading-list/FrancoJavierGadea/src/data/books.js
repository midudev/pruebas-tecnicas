
import BOOKS from './books.json';


export function getAllBooks(){

    return BOOKS.library;
}

export function getNumberOfBooks(){

    //return BOOKS.library.length;

    // console.log(BOOKS.library.length)

    return BOOKS.total;
}

export function getAllGenres(){

    // const genres = new Set();

    // BOOKS.library.forEach(({book}) => {

    //     genres.add(book.genre);
    // });

    // console.log(genres)

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


//? Get books with filters

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

export function getBooksBy(filters = {}){

    const queries = Object.entries(filters).filter(([key, value]) => value);

    if(queries.length === 0) return BOOKS.library;


    return BOOKS.library.filter(({book}) => {

        let flag = true;

        queries.forEach(([key, value]) => {

            const compareFn = COMPARATORS[key];

            if(compareFn){

                flag &&= compareFn(book, value);
            }
        })

        return flag;
    });
}



//? Search

export function searchBooks(search, filters = {}){

    const resultSearch = BOOKS.library.filter(({book}) => {

        let flag = false;

        const regex = new RegExp(`${search}`, 'gi');

        const targets = [book.title, book.genre, book.author?.name];

        targets.forEach(value => {

            if(value){

                const normalizedValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                const match = normalizedValue.match(regex);

                if(match) flag = true;
            }
        });

        return flag;
    });


    //* Applying filters
    const queries = Object.entries(filters).filter(([key, value]) => value);

    if(queries.length === 0) return resultSearch;

    return resultSearch.filter(({book}) => {

        let flag = true;

        queries.forEach(([key, value]) => {

            const compareFn = COMPARATORS[key];

            if(compareFn){

                flag &&= compareFn(book, value);
            }
        })

        return flag;
    });
}