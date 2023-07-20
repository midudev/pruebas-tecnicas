import type { StatePorts } from '../../../core/state/application/state.ports'
import { StateUsecase } from '../../../core/state/application/state.usecase'
import type { Book } from '../../../core/types'
import type { ReadingListItemPorts } from './reading-list-item.ports'

export class ReadingListItemUsecase extends StateUsecase {
  constructor(
    statePorts: StatePorts,
    private readonly itemPorts: ReadingListItemPorts
  ) {
    super(statePorts)
  }

  setStars(stars: number, book: Book) {
    this.updateState(this.provideAppState())

    const bookUpdated = {
      ...book,
      stars,
    }

    const readingListUpdated = this.updateReadingList(bookUpdated)
    const stateUpdated = this.itemPorts.updateReadingList(readingListUpdated)

    this.updateState(stateUpdated)
  }

  toggleBookIsDone(book: Book, isDone: boolean) {
    this.updateState(this.provideAppState())

    const bookUpdated = {
      ...book,
      isDone,
    }

    const readingListUpdated = this.updateReadingList(bookUpdated)
    const stateUpdated = this.itemPorts.updateReadingList(readingListUpdated)

    this.updateState(stateUpdated)
  }

  private updateReadingList(bookUpdated: Book) {
    return this.state.readingBooks.map((book: Book) => {
      if (book.ISBN === bookUpdated.ISBN) {
        return bookUpdated
      }

      return book
    })
  }
}
