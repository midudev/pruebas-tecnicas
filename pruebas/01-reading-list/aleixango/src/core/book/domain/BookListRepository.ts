import { Book } from "./Book"

export interface BookListRepository {
  get(): Promise<Book[]>
  add(book: Book): Promise<boolean>
  remove(isbn: string): Promise<boolean>
}
