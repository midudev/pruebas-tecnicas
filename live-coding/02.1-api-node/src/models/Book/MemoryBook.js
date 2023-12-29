import { authors } from '../Author/MemoryAuthor.js'

export const books = []

export class MemoryBook {
  static getAll () {
    return books.map(({ id, title, chapters, pages, authorsIds }) => {
      const replacedNames = authorsIds.map(id => {
        const author = authors.find(author => author.id === id)
        return author.name
      })

      return {
        id,
        title,
        chapters,
        pages,
        authors: replacedNames
      }
    })
  }

  static getPagesAverage (bookId) {
    const book = books.find(book => book.id === bookId)
    const { id, chapters, pages } = book

    if (!book) throw new Error('Book not found')

    const pageAverage = parseFloat((pages / chapters).toFixed(2))

    return { id, pageAverage }
  }

  static create (book) {
    const booksAuthors = book.authorsIds

    const AuthorsExist = booksAuthors.every(id => {
      return authors.find(author => author.id === id)
    })

    if (!AuthorsExist) {
      throw new Error('Author not found')
    }

    books.push(book)
    return book
  }
}
