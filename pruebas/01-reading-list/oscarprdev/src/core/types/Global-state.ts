import type { Book } from '.'

export interface GlobalState {
  books: Book[] | []
  readingBooks: Book[] | []
}
