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

    if (!book) throw new Error('Book not found')
    const { id, chapters, pages } = book

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

    const newBook = {
      id: books.length + 1,
      ...book
    }

    books.push(newBook)
    return newBook
  }
}
