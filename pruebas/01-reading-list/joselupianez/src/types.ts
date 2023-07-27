export interface Book {
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

export interface BookItem {
    book: Book;
}

export interface Library {
    library: BookItem[];
}