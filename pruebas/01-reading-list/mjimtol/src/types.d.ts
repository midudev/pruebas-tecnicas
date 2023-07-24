export interface Libros {
    library: Library[];
}

export interface Library {
    book: Book;
}

export interface Book {
    title:    string;
    pages:    number;
    genre:    string;
    cover:    string;
    synopsis: string;
    year:     number;
    ISBN:     string;
    author:   Author;
}

export interface BookSelectable extends Book {
    selected: boolean;
    priority: number;
}

export interface Author {
    name:       string;
    otherBooks: string[];
}

export enum TABS {
    Libreria = 'Libreria',
    Lectura = 'Lectura',
}