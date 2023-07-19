import type { Book, GlobalState } from "../../../core/types";

export interface BookStarsPorts {
    setStars(books: Book[]): GlobalState
}