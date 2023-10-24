import { BOOK_FILTERS } from "./constants/constants"

export interface dataBooks {
  library: LibraryItem[]
}

interface LibraryItem {
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

export interface IFilters {
  search: null | string
  genres: string[]
  pages: number
}

export type FilterValue = (typeof BOOK_FILTERS)[keyof typeof BOOK_FILTERS]



 

