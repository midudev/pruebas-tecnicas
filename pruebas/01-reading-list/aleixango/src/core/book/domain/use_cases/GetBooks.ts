import { Book } from "../Book"
import { BookRepository } from "../BookRepository"

export class GetBooks {
  constructor(private readonly bookRepository: BookRepository) {}

  execute(filteredGenre: string): Promise<Book[]> {
    return this.bookRepository.get(filteredGenre)
  }
}
