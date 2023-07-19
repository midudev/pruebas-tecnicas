import { Book } from "../domain/Book"

export interface CommonBooksState {
  filterGenre: string
}

export interface LoadingBooksState {
  kind: "LoadingBooksState"
}

export interface LoadedBooksState {
  kind: "LoadedBooksState"
  books: Book[]
}

export interface ErrorBooksState {
  kind: "ErrorBooksState"
  error: string
}

export type BooksState = (LoadingBooksState | LoadedBooksState | ErrorBooksState) & CommonBooksState

export const booksInitialState: BooksState = {
  kind: "LoadingBooksState",
  filterGenre: "",
}
