import { Book } from "../domain/Book"
import { BookRepository } from "../domain/BookRepository"
import books from "../../../../../books.json"

export class InMemoryBookRepository implements BookRepository {
  get(): Promise<Book[]> {
    return new Promise((resolve) => {
      resolve(books.library.map((book) => book.book))
    })
  }
}
