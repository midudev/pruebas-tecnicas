import type { StateInfra } from '../../../core/state/infra/state.infra'
import type { Book, GlobalState } from '../../../core/types'

export class ReadingListRepository {
  constructor(private readonly infra: StateInfra) {}

  addBook(books: Book[], readingList: Book[]) {
    return this.infra.updateBookLists(books, readingList)
  }

  removeBook(books: Book[], readingList: Book[]) {
    return this.infra.updateBookLists(books, readingList)
  }
}
