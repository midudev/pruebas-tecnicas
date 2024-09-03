import { Books } from '../const/books'
import { type Library } from '../interfaces/interfaces'

export const getBooks = new Promise<Library[]>((resolve) => {
  setTimeout(() => {
    const mappedBooks = Books.library.map((books) => {
      return {
        book: {
          title: books.book.title,
          pages: books.book.pages,
          genre: books.book.genre,
          cover: books.book.cover,
          synopsis: books.book.synopsis,
          year: books.book.year,
          ISBN: books.book.ISBN,
          author: {
            name: books.book.author.name,
            otherBooks: books.book.author.otherBooks
          }
        }
      }
    })
    resolve(mappedBooks)
  }, 300)
})
