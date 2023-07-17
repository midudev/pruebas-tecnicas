/* interface Books {
    library: Book[]
} */

export interface BooksState {
  books: Book[]
  getBooks: () => void
  setBooks: (book: Book[]) => void
  filters: {}
  filter: (name: string, value: string | number) => void
}

export interface Book {
  book: {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number
    ISBN: string
    author: Author
    // wantRead: boolean
  }
}

interface Author {
  name: string
  otherBooks: string[]
}
