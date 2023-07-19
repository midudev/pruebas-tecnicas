import { Ploc } from "../../common/presentation/Ploc"
import { Book } from "../domain/Book"
import { GetBooks } from "../domain/use_cases/GetBooks"
import { BooksState, booksInitialState } from "./BooksState"

export class BooksPloc extends Ploc<BooksState> {
  constructor(private getBooks: GetBooks) {
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
}
