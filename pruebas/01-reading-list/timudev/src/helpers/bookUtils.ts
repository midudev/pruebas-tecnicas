import { Book } from "../interfaces/interfaces";

export const bookUtils = (books: Book[]) => {
 
    const minPages = books.reduce((min, book) => {
        return book.pages < min ? book.pages : min;
        }, Infinity);
    
    const maxPages = books.reduce((max, book) => {
        return book.pages > max ? book.pages : max;
    }, 0);

    return {
        minPages,
        maxPages
    }
}

