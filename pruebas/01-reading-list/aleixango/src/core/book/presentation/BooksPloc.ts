import { Ploc } from "../../common/presentation/Ploc"
import { Book } from "../domain/Book"
import { GetBooks } from "../domain/use_cases/GetBooks"
import { RemoveBook } from "../domain/use_cases/RemoveBook"
import { BooksState, booksInitialState } from "./BooksState"

export class BooksPloc extends Ploc<BooksState> {
  constructor(
    private readonly getBooks: GetBooks,
    private readonly removeBook: RemoveBook,
  ) {
    super(booksInitialState)
  }

  public get genres(): string[] {
    if (this.state.kind !== "LoadedBooksState") {
      return []
    }

    return [...new Set(this.state.books.map((book: Book) => book.genre))]
  }

  async search(filterGenre: string): Promise<void> {
    try {
      this.changeState({
        kind: "LoadingBooksState",
        filterGenre,
      })

      const books: Book[] = await this.getBooks.execute(filterGenre)

      this.changeState({
        kind: "LoadedBooksState",
        books,
        filterGenre,
      })
    } catch (error) {
      this.changeState({
        kind: "ErrorBooksState",
        error: "Ha ocurrido un error. Por favor, prueba más tarde",
        filterGenre,
      })
    }
  }

  async remove(isbn: string): Promise<void> {
    try {
      await this.removeBook.execute(isbn)
      const books: Book[] = await this.getBooks.execute(this.state.filterGenre)

      this.changeState({
        kind: "LoadedBooksState",
        books,
        filterGenre: this.state.filterGenre,
      })
    } catch (error) {
      this.changeState({
        kind: "ErrorBooksState",
        error: "Ha ocurrido un error. Por favor, prueba más tarde",
        filterGenre: "",
      })
    }
  }
}
