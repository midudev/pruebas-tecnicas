export interface Books {
    library: Library[];
}

export interface Library {
    book: Book;
}

export interface Book {
    id: number;
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
}

export interface Author {
    name: string;
    otherBooks: string[];
}