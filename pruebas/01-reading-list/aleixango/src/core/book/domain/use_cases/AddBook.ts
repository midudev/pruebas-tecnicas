import { Book } from "../Book"
import { BookRepository } from "../BookRepository"

export class AddBook {
  constructor(private readonly bookRepository: BookRepository) {}

  execute(book: Book): Promise<boolean> {
    return this.bookRepository.add(book)
  }
}
