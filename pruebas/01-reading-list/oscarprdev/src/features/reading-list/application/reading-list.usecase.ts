import type { StatePorts } from '../../../core/state/application/state.ports'
import { StateUsecase } from '../../../core/state/application/state.usecase'
import type { Book } from '../../../core/types'
import type { ReadingListPorts } from './reading-list.ports'

export class ReadingListUsecase extends StateUsecase {
  constructor(
    statePorts: StatePorts,
    private readonly readingListPorts: ReadingListPorts
  ) {
    super(statePorts)
  }

  provideAppState() {
    return this.readingListPorts.provideAppState()
  }

  addBook(book: Book) {
    this.updateState(this.provideAppState())

    const readingList = this.addBookToBooksList(this.state.readingBooks, book)
    const booksList = this.removeBookFromReadingList(this.state.books, book)

    const stateUpdated = this.readingListPorts.addBook(booksList, readingList)

    this.updateState(stateUpdated)
  }

  removeBook(book: Book) {
    this.updateState(this.provideAppState())

    const readingList = this.removeBookFromReadingList(
      this.state.readingBooks,
      book
    )
    const bookUpdated = { ...book, currentPage: 0, stars: 0 }

    const booksList = this.addBookToBooksList(this.state.books, bookUpdated)

    const stateUpdated = this.readingListPorts.removeBook(
      booksList,
      readingList
    )

    this.updateState(stateUpdated)
  }

  private removeBookFromReadingList(state: Book[], book: Book) {
    return [...state.filter((localBook) => localBook.ISBN !== book.ISBN)]
  }

  private addBookToBooksList(state: Book[], book: Book) {
    const currentState = [...state]

    currentState.unshift(book)

    return currentState
  }
}
