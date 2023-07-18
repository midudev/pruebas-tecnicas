import { Book } from "./Book"

export interface BookRepository {
  get(): Promise<Book[]>
}
