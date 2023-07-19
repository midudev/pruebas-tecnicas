import type { Book, GlobalState } from '../../../core/types'

export interface ReadingListPorts {
  addBook(books: Book[], readingList: Book[]): GlobalState
  removeBook(books: Book[], readingList: Book[]): GlobalState
  provideAppState(): GlobalState
}
