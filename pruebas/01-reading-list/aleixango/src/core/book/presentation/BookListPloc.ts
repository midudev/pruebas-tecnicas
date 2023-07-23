import { Ploc } from "@/core/common/presentation/Ploc"
import { BookListState, bookListInitialState } from "./BookListState"
import { GetBooksFromList } from "../domain/use_cases/GetBooksFromList"
import { RemoveBookFromList } from "../domain/use_cases/RemoveBookFromList"
import { AddBookToList } from "../domain/use_cases/AddBookToList"
import { Book } from "../domain/Book"

export class BookListPloc extends Ploc<BookListState> {
  constructor(
    private readonly getBooksFromList: GetBooksFromList,
    private readonly addBookToList: AddBookToList,
    private readonly removeBookFromList: RemoveBookFromList,
  ) {
    super(bookListInitialState)
  }

  async get(): Promise<void> {
    try {
      const books: Book[] = await this.getBooksFromList.execute()
      this.changeState({
        kind: "LoadedBookListState",
        books,
      })
    } catch (error) {
      this.changeState({
        kind: "ErrorBookListState",
        error: "Ha ocurrido un error. Por favor, prueba más tarde",
      })
    }
  }

  async addBook(book: Book): Promise<void> {
    try {
      await this.addBookToList.execute(book)
      await this.get()
    } catch (error) {
      this.changeState({
        kind: "ErrorBookListState",
        error: "Ha ocurrido un error. Por favor, prueba más tarde",
      })
    }
  }

  async removeBook(isbn: string): Promise<void> {
    try {
      await this.removeBookFromList.execute(isbn)
      await this.get()
    } catch (error) {
      this.changeState({
        kind: "ErrorBookListState",
        error: "Ha ocurrido un error. Por favor, prueba más tarde",
      })
    }
  }
}
