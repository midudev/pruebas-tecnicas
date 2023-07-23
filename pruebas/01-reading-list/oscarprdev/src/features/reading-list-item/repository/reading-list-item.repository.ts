import type { StateInfra } from '../../../core/state/infra/state.infra'
import type { Book, GlobalState } from '../../../core/types'
import type { ReadingListItemPorts } from '../application/reading-list-item.ports'

export class ReadingListItemRepository implements ReadingListItemPorts {
  constructor(private readonly infra: StateInfra) {}

  updateReadingList(readingListBooks: Book[]): GlobalState {
    const booksStored = this.infra.provideLocalStorage().books

    return this.infra.updateBookLists(booksStored, readingListBooks)
  }
}
