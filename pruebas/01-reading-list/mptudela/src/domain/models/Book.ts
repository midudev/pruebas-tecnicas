import { Author } from './Author';

export type Book = {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author?: Author;
};
