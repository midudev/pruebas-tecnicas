import type { Book, GlobalState } from '../../../core/types'

export interface ReadingListInfra {
  addBook(book: Book): GlobalState
}

export class DefaultReadingListInfra {
  constructor() {}

  addBook(book: Book): GlobalState {
    const localStorageState = this.provideLocalStorage()

    // Add book to reading list
    localStorageState.readingBooks = [...localStorageState.readingBooks, book]

    // Remove book from library list
    localStorageState.books = [
      ...localStorageState.books.filter(
        (localBook) => localBook.ISBN !== book.ISBN
      ),
    ]

    this.updateLocalStorage(localStorageState)

    return this.provideLocalStorage()
  }

  private provideLocalStorage(): GlobalState {
    const stringLocalStorageState = localStorage.getItem('state')
    return JSON.parse(stringLocalStorageState)
  }

  private updateLocalStorage(stateUpdated: GlobalState) {
    localStorage.setItem('state', JSON.stringify(stateUpdated))
  }
}
