import type { StatePorts } from '../../../core/state/application/state.ports'
import { StateUsecase } from '../../../core/state/application/state.usecase'
import type { Book } from '../../../core/types'
import type { ReadingListPorts } from './reading-list.ports'
import type { OrderList } from './reading-list.types'

const MAX_VAL = 'Mayor valoracion'
const MIN_VAL = 'Menor valoracion'
const COMPLETED = 'Completado'
const READING = 'Leyendo'

export const sortItems = [MAX_VAL, MIN_VAL, COMPLETED, READING]

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

  dragBooks(orderState: OrderList) {
    this.updateState(this.provideAppState())

    const readingList = [...this.state.readingBooks]

    const startIndex = orderState.start.index
    const endIndex = orderState.end.index

    readingList[startIndex] = orderState.end.book
    readingList[endIndex] = orderState.start.book

    const stateUpdated = this.readingListPorts.updateBooks(
      this.state.books,
      readingList
    )

    this.updateState(stateUpdated)
  }

  sortBooks(item: string) {
    this.updateState(this.provideAppState())

    let readingList: Book[]

    switch (item) {
      case MAX_VAL:
        readingList = this.state.readingBooks.sort((a, b) => b.stars - a.stars)
        break
      case MIN_VAL:
        readingList = this.state.readingBooks.sort((a, b) => a.stars - b.stars)
        break
      case COMPLETED:
        readingList = this.state.readingBooks.sort((a, b) =>
          b.isDone ? 1 : -1
        )
        break
      case READING:
        readingList = this.state.readingBooks.sort((a, b) =>
          b.isDone ? -1 : 1
        )
        break
      default:
        readingList = this.state.readingBooks
        break
    }

    const stateUpdated = this.readingListPorts.updateBooks(
      this.state.books,
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
