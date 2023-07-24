/*export interface Data {
    library: Library[]
}*/

export type Library = Data[]


export interface Data {
    book: Book
}

export interface Book {
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
