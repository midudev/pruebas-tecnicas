import type { StateInfra } from '../../../core/state/infra/state.infra'
import type { Book, GlobalState } from '../../../core/types'
import type { ReadingListPorts } from '../application/reading-list.ports'

export class ReadingListRepository implements ReadingListPorts {
  constructor(private readonly infra: StateInfra) {}

  updateBooks(books: Book[], readingList: Book[]): GlobalState {
    return this.infra.updateBookLists(books, readingList)
  }
}
