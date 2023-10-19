/**
 * Para la próxima prueba técnica, separar este archivo en varios.
 */

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
  priority?: boolean
}

export interface Author {
  name: string
  otherBooks: string[]
}

export interface BookFilters {
  genre: string
  pages: number
  name: string
}

export interface State {
  books: Book[]
  readList: Book[]
  loading: boolean
  filters: BookFilters
  sortReadListByPriority: boolean
}

export type Action =
  | { type: 'SET_BOOKS', payload: Book[] }
  | { type: 'SET_READ_LIST', payload: Book[] }
  | { type: 'ADD_BOOK', payload: Book }
  | { type: 'REMOVE_BOOK', payload: Book }
  | { type: 'SET_FILTERS', payload: BookFilters }
  | { type: 'SET_BOOK_AS_PRIO', payload: Book }
  | { type: 'SET_SORT_READ_LIST_BY_PRIORITY', payload: boolean }

export interface BooksContextType {
  books: Book[]
  readList: Book[]
  loading: boolean
  filters: BookFilters
  sortReadListByPriority: boolean
  setBooks: (books: Book[]) => void
  setReadList: (books: Book[]) => void
  addBook: (book: Book) => void
  removeBook: (book: Book) => void
  setBookPrio: (book: Book) => void
  setFilters: (filters: BookFilters) => void
  filterBooks: (books: Book[]) => Book[]
  setSortReadListByPriority: (sort: boolean) => void
}

export enum FilterTypes {
  GENRE = 'genre',
  PAGES = 'pages',
  NAME = 'name'
}
