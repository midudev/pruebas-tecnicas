import { books } from '../data/books'

class ReadingList {
  constructor () {
    this.booksAvailable = books
    this.addedBooks = []
  }

  addBook (book) {
    this.addedBooks = [...this.addedBooks, book]
    this.booksAvailable = this.booksAvailable.filter(elem => elem !== book)
  }

  removeBook (book) {
    this.addedBooks = this.addedBooks.filter(elem => elem !== book)
    this.booksAvailable = [book, ...this.booksAvailable]
  }
}

export { ReadingList }
