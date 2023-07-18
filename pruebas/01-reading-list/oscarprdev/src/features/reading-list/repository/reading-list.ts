import type { Book } from '../../../core/types'
import type { ReadingListInfra } from '../infra/reading-list.infra'

export class ReadingListRepository {
  constructor(private readonly infra: ReadingListInfra) {}

  addBook(book: Book) {
    return this.infra.addBook(book)
  }
}
