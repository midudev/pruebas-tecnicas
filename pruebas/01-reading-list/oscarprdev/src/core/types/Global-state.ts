import type { Book } from '.';

export interface GlobalState {
    books: Book[] | [];
    readingBooks: Book[] | [];
    theme: Theme;
}

export enum Theme {
    dark = 'dark',
    light = 'light',
}
