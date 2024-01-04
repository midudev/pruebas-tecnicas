import { books } from '../data/books'

class ReadingList {
  constructor () {
    this.booksAvailable = this.getDataFromLocalStorage('booksAvailable', books)
    this.addedBooks = this.getDataFromLocalStorage('addedBooks')
  }

  addBook (book) {
    const syncAddedBooks = [...this.addedBooks, book]
    const syncBooksAvailable = this.booksAvailable.filter(elem => elem !== book)

    this.syncLocalStorage('addedBooks', syncAddedBooks)
    this.syncLocalStorage('booksAvailable', syncBooksAvailable)

    this.addedBooks = this.getDataFromLocalStorage('addedBooks')
    this.booksAvailable = this.getDataFromLocalStorage('booksAvailable')
  }

  removeBook (book) {
    const syncAddedBooks = this.addedBooks.filter(elem => elem !== book)
    const syncBooksAvailable = [book, ...this.booksAvailable]

    this.syncLocalStorage('addedBooks', syncAddedBooks)
    this.syncLocalStorage('booksAvailable', syncBooksAvailable)

    this.addedBooks = this.getDataFromLocalStorage('addedBooks')
    this.booksAvailable = this.getDataFromLocalStorage('booksAvailable')
  }

  getDataFromLocalStorage (key, defaultValue = []) {
    let data = window.localStorage.getItem(key)

    if (!data) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue))
      data = window.localStorage.getItem(key)
      return JSON.parse(data)
    }

    return JSON.parse(data)
  }

  syncLocalStorage (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

export { ReadingList }
