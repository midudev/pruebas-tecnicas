import type { StatePorts } from '../../../core/state/application/state.ports'
import { StateUsecase } from '../../../core/state/application/state.usecase'
import type { Book } from '../../../core/types'
import type { ReadingListPorts } from './reading-list.ports'
import type { OrderList } from './reading-list.types'

export class ReadingListUsecase extends StateUsecase {
  constructor(
    statePorts: StatePorts,
    private readonly readingListPorts: ReadingListPorts
  ) {
    super(statePorts)
  }

  addBook(book: Book) {
    this.updateState(this.provideAppState())

    const readingList = this.addBookToBooksList(this.state.readingBooks, book)
    const booksList = this.removeBookFromReadingList(this.state.books, book)

    const stateUpdated = this.readingListPorts.updateBooks(
      booksList,
      readingList
    )

    this.updateState(stateUpdated)
  }

  removeBook(book: Book) {
    this.updateState(this.provideAppState())

    const readingList = this.removeBookFromReadingList(
      this.state.readingBooks,
      book
    )
    const bookUpdated = { ...book, stars: 0, isDone: false }

    const booksList = this.addBookToBooksList(this.state.books, bookUpdated)

    const stateUpdated = this.readingListPorts.updateBooks(
      booksList,
      readingList
    )

    this.updateState(stateUpdated)
  }

  sortBooks(orderState: OrderList) {
    this.updateState(this.provideAppState())

    const radingList = [...this.state.readingBooks]

    const startIndex = orderState.start.index
    const endIndex = orderState.end.index

    radingList[startIndex] = orderState.end.book
    radingList[endIndex] = orderState.start.book

    const stateUpdated = this.readingListPorts.updateBooks(
      this.state.books,
      radingList
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
