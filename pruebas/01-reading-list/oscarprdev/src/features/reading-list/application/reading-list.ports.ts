import type { Book, GlobalState } from '../../../core/types'

export interface ReadingListPorts {
  addBook(book: Book): GlobalState
}
