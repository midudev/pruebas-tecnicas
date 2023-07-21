import { Book } from "./Book"

export interface BookRepository {
  get(filterGenre: string): Promise<Book[]>
  remove(isbn:string): Promise<boolean>
}
