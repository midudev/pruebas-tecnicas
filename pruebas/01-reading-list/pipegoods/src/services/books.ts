import books from '../data/books.json';
import { MiduEditorial } from '../types/types';

export const getBooks = () => {
    return new Promise<MiduEditorial>((resolve, reject) => {
        setTimeout(() => {
            resolve(books);
        }, 500);
    });
};

export const getGenres = () => {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const genres = books.library.map((book) => book.book.genre);
            const uniqueGenres = [...new Set(genres)];
            resolve(uniqueGenres);
        }, 500);
    });
};
