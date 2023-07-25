import { type BooksContextType, type State } from './types'

export const BOOKS_INITIAL_STATE: State = {
  books: [],
  readList: [],
  loading: true,
  filters: {
    genre: '',
    pages: 0
  },
  sortReadListByPriority: false
}

export const INITIAL_CONTEXT: BooksContextType = {
  books: [],
  readList: [],
  loading: false,
  filters: {
    genre: '',
    pages: 0
  },
  sortReadListByPriority: false,
  setBooks: () => {},
  setReadList: () => {},
  addBook: () => {},
  removeBook: () => {},
  setFilters: () => {},
  filterBooks: () => [],
  setBookPrio: () => {},
  setSortReadListByPriority: () => {}
}

export const ALL_BOOKS_GENRE = 'all'

export const LOCAL_STORAGE_EVENT = 'storage'
