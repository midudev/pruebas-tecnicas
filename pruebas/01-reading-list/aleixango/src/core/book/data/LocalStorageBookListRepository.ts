import { Book } from "../domain/Book"
import { BookListRepository } from "../domain/BookListRepository"

export class LocalStorageBookListRepository implements BookListRepository {
  private bookListKey: string = "bookList"

  get(): Promise<Book[]> {
    return new Promise((resolve) => {
      const bookList: Book[] = JSON.parse(localStorage.getItem(this.bookListKey) ?? "[]")
      resolve(bookList)
    })
  }

  add(book: Book): Promise<boolean> {
    return new Promise((resolve) => {
      this.get().then((books: Book[]) => {
        books.push(book)
        localStorage.setItem(this.bookListKey, JSON.stringify(books))
        resolve(true)
      })
    })
  }

  remove(isbn: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.get().then((books: Book[]) => {
        const bookIndex = books.findIndex((book: Book) => book.ISBN === isbn)
        if (bookIndex !== -1) {
          books.splice(bookIndex, 1)
          localStorage.setItem(this.bookListKey, JSON.stringify(books))
        }
        resolve(true)
      })
    })
  }
}
