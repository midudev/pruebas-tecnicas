import { Dispatch, SetStateAction } from "react";
import { Book } from "./books";
import { InterestBook } from "./interestbook";

export interface GeneralType {
  bookList: Book[],
  setBookList: Dispatch<SetStateAction<Book[]>>
  readList: InterestBook[] | null,
  setReadList: Dispatch<SetStateAction<InterestBook[]|null>>,
  resetBookList: Function,
  showReadList: boolean,
  setShowReadList: Dispatch<SetStateAction<boolean>>
}