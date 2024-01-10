import { BookListRepository } from "../BookListRepository"

export class RemoveBookFromList {
  constructor(private readonly bookListRepository: BookListRepository) {}

  execute(isbn: string): Promise<boolean> {
    return this.bookListRepository.remove(isbn)
  }
}
