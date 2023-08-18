 export interface BookProps {
    book: BooksState
 }

 interface BooksState {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number
    ISBN: string
    author: AuthorType
}

 interface AuthorType {
    name: string
    otherBooks: string[]
}