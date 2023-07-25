import books from '../../../books.json'
import { type Book } from '../types'

export async function getBooks (): Promise<Book[]> {
  // Devolvemos una promise simulando llamada a la api con los books del json.
  return await new Promise<Book[]>((resolve) => {
    setTimeout(() => {
      /**
       * Remapeamos por si la estructura del json cambia en un futuro.
       * que no nos fastidie la app entera.
       */
      const mappedBooks: Book[] = books.library.map((reg) => {
        const book = reg.book
        return {
          title: book.title,
          pages: book.pages,
          genre: book.genre,
          cover: book.cover,
          synopsis: book.synopsis,
          year: book.year,
          ISBN: book.ISBN,
          author: book.author
        }
      })

      resolve(mappedBooks)
    }, 1000)
  })
}
