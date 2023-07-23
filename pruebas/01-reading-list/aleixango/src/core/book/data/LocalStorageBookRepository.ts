import { Book } from "../domain/Book"
import { BookRepository } from "../domain/BookRepository"
import booksData from "../../../../../books.json"

export class LocalStorageBookRepository implements BookRepository {
  private books: Book[] = []
  private readonly booksKey: string = "books"

  constructor() {
    if (localStorage.getItem(this.booksKey)) {
      this.books = JSON.parse(localStorage.getItem(this.booksKey)!) as Book[]
    } else {
      this.books = booksData.library.map((book) => book.book)
    }
    window.addEventListener("storage", (event: StorageEvent) => {
      if (event.key === this.booksKey) {
        this.books = JSON.parse(event.newValue ?? "[]") as Book[]
      }
    })
  }

  get(filterGenre: string): Promise<Book[]> {
    return new Promise((resolve) => {
      if (filterGenre === "") {
        resolve(booksData.library.map((book: { book: Book }) => book.book))
      }
      resolve(this.books.filter((book: Book) => book.genre === filterGenre))
    })
  }

  add(newBook: Book): Promise<boolean> {
    return new Promise((resolve) => {
      const indexToInsert = this.books.findIndex((book: Book) => book.ISBN > newBook.ISBN)
      if (indexToInsert !== -1) {
        this.books.splice(indexToInsert, 0, newBook)
      } else {
        this.books.push(newBook)
      }
      localStorage.setItem(this.booksKey, JSON.stringify(this.books))
      resolve(true)
    })
  }

  remove(isbn: string): Promise<boolean> {
    return new Promise((resolve) => {
      const index = this.books.findIndex((book: Book) => book.ISBN === isbn)
      if (index !== -1) {
        this.books.splice(index, 1)
        localStorage.setItem(this.booksKey, JSON.stringify(this.books))
        resolve(true)
      }
      resolve(false)
    })
  }
}
