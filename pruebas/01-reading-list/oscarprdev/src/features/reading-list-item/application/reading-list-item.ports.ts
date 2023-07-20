import type { Book, GlobalState } from '../../../core/types'

export interface ReadingListItemPorts {
  updateReadingList(readingListBooks: Book[]): GlobalState
}
