export interface Library {
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

interface Author {
    name: string
    otherBooks: string[]
}

// interface BookList extends Book {
//     priority: string
// }

