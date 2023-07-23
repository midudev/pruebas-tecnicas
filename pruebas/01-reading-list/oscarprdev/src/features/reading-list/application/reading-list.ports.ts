import type { Book, GlobalState } from '../../../core/types'

export interface ReadingListPorts {
  updateBooks(books: Book[], readingList: Book[]): GlobalState
}
