const books = []

export class MemoryBook {
  static getAll () {
    return books
  }

  static getPagesAverage (id) {
    return books.find(book => book.id === id)
  }

  static create (book) {
    books.push(book)
    return book
  }
}
