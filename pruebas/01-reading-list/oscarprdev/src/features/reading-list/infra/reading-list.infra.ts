import type { Book, GlobalState } from '../../../core/types'

export interface ReadingListInfra {
  addBook(book: Book): GlobalState
}

export class DefaultReadingListInfra {
  constructor() {}

  addBook(book: Book): GlobalState {
    const localStorageState = this.provideLocalStorage()

    // Add book to reading list
    localStorageState.readingBooks = this.addBookToLocalstorage(
      localStorageState.readingBooks,
      book
    )

    // Remove book from library list
    localStorageState.books = this.removeBookFromLocalstorage(
      localStorageState.books,
      book
    )

    this.updateLocalStorage(localStorageState)

    return this.provideLocalStorage()
  }

  removeBook(book: Book): GlobalState {
    const localStorageState = this.provideLocalStorage()

    // Remove book ffrom reading list
    localStorageState.readingBooks = this.removeBookFromLocalstorage(
      localStorageState.readingBooks,
      book
    )

    // Add book to library list
    localStorageState.books = this.addBookToLocalstorage(
      localStorageState.books,
      book
    )

    this.updateLocalStorage(localStorageState)

    return this.provideLocalStorage()
  }

  private removeBookFromLocalstorage(storage: Book[], book: Book) {
    return [...storage.filter((localBook) => localBook.ISBN !== book.ISBN)]
  }

  private addBookToLocalstorage(storage: Book[], book: Book) {
    const currentStorage = [...storage]

    currentStorage.unshift(book)

    return currentStorage
  }

  private provideLocalStorage(): GlobalState {
    const stringLocalStorageState = localStorage.getItem('state')
    return JSON.parse(stringLocalStorageState)
  }

  private updateLocalStorage(stateUpdated: GlobalState) {
    localStorage.setItem('state', JSON.stringify(stateUpdated))
  }
}
