import type { Book, GlobalState } from '../../core/types'
import type { ReadingListItemPorts } from '../reading-list-item/application/reading-list-item.ports'

export class TestReadingListItemRepository implements ReadingListItemPorts {
  updateReadingList(readingListBooks: Book[]): GlobalState {
    return {
      books: [],
      readingBooks: readingListBooks,
    }
  }
}
