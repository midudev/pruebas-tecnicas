import { Book } from "../Book"
import { BookListRepository } from "../BookListRepository"

export class AddBookToList {
  constructor(private readonly bookListRepository: BookListRepository) {}

  execute(book: Book): Promise<boolean> {
    return this.bookListRepository.add(book)
  }
}
