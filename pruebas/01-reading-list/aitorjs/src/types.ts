/* interface Books {
    library: Book[]
} */

export interface BooksState {
  books: Book[],
  getBooks: () => void
}

interface Book {
  book: {
    title: string,
    pages: number,
    genre: string,
    cover: string,
    synopsis: string,
    year: number,
    ISBN: string,
    author: Author
  }
}

interface Author {
  name: string,
  otherBooks: string[]
}

