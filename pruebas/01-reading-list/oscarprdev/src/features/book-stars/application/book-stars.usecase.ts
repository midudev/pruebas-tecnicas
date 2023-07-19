import type { StatePorts } from "../../../core/state/application/state.ports";
import { StateUsecase } from "../../../core/state/application/state.usecase";
import type { Book } from "../../../core/types";
import type { BookStarsPorts } from "./book-stars.ports";

export class BookStarsUsecase extends StateUsecase {
    constructor(
        statePorts: StatePorts,
        private readonly bookStarsPorts: BookStarsPorts
      ) {
        super(statePorts)
      }

      setStars(stars: number, book: Book) {
        this.updateState(this.provideAppState())

        const bookUpdated = {
            ...book,
            stars
        }

        const readingListUpdated = this.state.readingBooks.map((book: Book) => {
            if(book.ISBN === bookUpdated.ISBN) {
                return bookUpdated
            }

            return book
        })

        const stateUpdated = this.bookStarsPorts.setStars(readingListUpdated)

        this.updateState(stateUpdated)
      }
}