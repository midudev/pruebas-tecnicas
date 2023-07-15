import { Dispatch, SetStateAction } from "react";
import { Book } from "./books";
import { InterestBook } from "./interestbook";

export interface GeneralType {
  bookList: Book[] | null,
  setBookList: Dispatch<SetStateAction<Book[]|null>>
  readList: InterestBook[] | null,
  setReadList: Dispatch<SetStateAction<InterestBook[]|null>>,
  resetBookList: Function
}