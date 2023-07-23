import type { StatePorts } from '../../../core/state/application/state.ports'
import type { Subscription } from '../../../core/state/application/state.types'
import { DefaultStateUsecase } from '../../../core/state/application/state.usecase'
import type { Book } from '../../../core/types'
import type { ReadingListItemPorts } from './reading-list-item.ports'

export class ReadingListItemUsecase extends DefaultStateUsecase {
  constructor(
    statePorts: StatePorts,
    private readonly itemPorts: ReadingListItemPorts,
    readonly listeners: Subscription[]
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
