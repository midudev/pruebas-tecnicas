
export interface Book {
    n:number,
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number
    ISBN: string
    author: Author
}

export interface Author {
    name: string
    otherBooks: string[]
}

export interface Props {
    book: Book;
}

