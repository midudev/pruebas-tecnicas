export interface Library {
  library: LibraryElement[]
}

export interface FilterBooksProps {
  books: LibraryElement[]
  filters: Filters
}

export interface Filters {
  query?: string
  genre?: string
  pages?: number
}

export interface LibraryElement {
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
