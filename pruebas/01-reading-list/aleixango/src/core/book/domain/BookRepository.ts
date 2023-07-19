import { Book } from "./Book"

export interface BookRepository {
  get(filterGenre: string): Promise<Book[]>
}
