import type { Book, GlobalState } from '../../core/types'
import type { ReadingListPorts } from '../reading-list/application/reading-list.ports'

export class TestReadingListRepository implements ReadingListPorts {
  updateBooks(books: Book[], readingList: Book[]): GlobalState {
    return {
      books,
      readingBooks: readingList,
    }
  }
}
