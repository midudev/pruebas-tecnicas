
export interface Book {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number
    ISBN: BookISBNType
    author: Author
}

export interface Author {
    name: string
    otherBooks: string[]
}

export type BookISBNType = string;

