import { Book } from "../Book"
import { BookListRepository } from "../BookListRepository"

export class GetBooksFromList {
  constructor(private readonly bookListRepository: BookListRepository) {}

  execute(): Promise<Book[]> {
    return this.bookListRepository.get()
  }
}
