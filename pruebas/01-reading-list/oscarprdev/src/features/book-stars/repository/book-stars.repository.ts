import type { StateInfra } from "../../../core/state/infra/state.infra";
import type { Book, GlobalState } from "../../../core/types";
import type { BookStarsPorts } from "../application/book-stars.ports";

export class BookStarsRepository implements BookStarsPorts {
    constructor(private readonly stateInfra: StateInfra) {}

    setStars(readingListBooks: Book[]): GlobalState {
        const booksStored = this.stateInfra.provideLocalStorage().books
        
        return this.stateInfra.updateBookLists(booksStored, readingListBooks)
    }
}