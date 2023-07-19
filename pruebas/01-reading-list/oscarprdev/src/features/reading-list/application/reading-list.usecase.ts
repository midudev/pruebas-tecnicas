import type { StatePorts } from '../../../core/state/application/state.ports'
import { StateUsecase } from '../../../core/state/application/state.usecase'
import type { Book } from '../../../core/types'
import type { ReadingListPorts } from './reading-list.ports'

export class ReadingListUsecase extends StateUsecase {
  constructor(
    private readonly statePorts: StatePorts,
    private readonly readingListPorts: ReadingListPorts
  ) {
    super(statePorts)
  }

  addBook(book: Book) {
    const stateUpdated = this.readingListPorts.addBook(book)

    this.updateState(stateUpdated)
  }

  removeBook(book: Book) {
    const stateUpdated = this.readingListPorts.removeBook(book)

    this.updateState(stateUpdated)
  }
}
