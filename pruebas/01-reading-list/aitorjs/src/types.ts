/* interface Books {
    library: Book[]
} */

interface Filters {
  [key: string]: any
}

export interface BooksState {
  wantReadBooks: Book[]
  filteredBooks: Book[]
  books: Book[]
  filters: Filters
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
