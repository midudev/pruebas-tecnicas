import { Book } from "./Book";

export interface Library {
  library: {
    book: Book
  }[];
}
