import { BookRepository } from "../BookRepository"

export class RemoveBook {
  constructor(private readonly bookRepository: BookRepository) {}

  execute(isbn: string): Promise<boolean> {
    return this.bookRepository.remove(isbn)
  }
}
