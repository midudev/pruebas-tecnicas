import { Book } from "../domain/Book"

export interface ErrorBookListState {
  kind: "ErrorBookListState"
  error: string
}

export interface LoadedBookListState {
  kind: "LoadedBookListState"
  books: Book[]
}

export type BookListState = LoadedBookListState | ErrorBookListState

export const bookListInitialState: BookListState = {
  kind: "LoadedBookListState",
  books: [],
}
