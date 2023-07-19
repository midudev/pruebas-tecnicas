/* interface Books {
    library: Book[]
} */

export interface BooksState {
  wantReadBooks: Book[]
  filteredBooks: Book[]
  books: Book[]
  filters: {}
  getBooks: () => void
  setBooks: (book: Book[]) => void
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
