import { Book } from "./Book"

export interface BookRepository {
  get(filterGenre: string): Promise<Book[]>
  add(book: Book): Promise<boolean>
  remove(isbn: string): Promise<boolean>
}
