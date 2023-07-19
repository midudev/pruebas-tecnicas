import { Book } from "../domain/Book"
import { BookRepository } from "../domain/BookRepository"
import books from "../../../../../books.json"

export class InMemoryBookRepository implements BookRepository {
  get(filterGenre: string): Promise<Book[]> {
    return new Promise((resolve) => {
      const allBooks: Book[] = books.library.map((book) => book.book)

      if (filterGenre === "") {
        resolve(allBooks)
      }

      resolve(allBooks.filter((book: Book) => book.genre === filterGenre))
    })
  }
}
