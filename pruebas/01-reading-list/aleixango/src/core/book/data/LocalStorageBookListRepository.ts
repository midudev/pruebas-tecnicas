import { Book } from "../domain/Book"
import { BookListRepository } from "../domain/BookListRepository"

export class LocalStorageBookListRepository implements BookListRepository {
  private bookList: Book[] = []
  private readonly bookListKey: string = "bookList"

  constructor() {
    this.bookList = JSON.parse(localStorage.getItem(this.bookListKey) ?? "[]") as Book[]
  }

  get(): Promise<Book[]> {
    return new Promise((resolve) => {
      resolve(this.bookList)
    })
  }

  add(book: Book): Promise<boolean> {
    return new Promise((resolve) => {
      this.bookList.push(book)
      localStorage.setItem(this.bookListKey, JSON.stringify(this.bookList))
      resolve(true)
    })
  }

  remove(isbn: string): Promise<boolean> {
    return new Promise((resolve) => {
      const bookIndex = this.bookList.findIndex((book: Book) => book.ISBN === isbn)
      if (bookIndex !== -1) {
        this.bookList.splice(bookIndex, 1)
        localStorage.setItem(this.bookListKey, JSON.stringify(this.bookList))
        resolve(true)
      }
      resolve(false)
    })
  }
}
