import { Dispatch, Reducer, ReducerAction, SetStateAction } from "react";
import { Book } from "./books";
import { InterestBook } from "./interestbook";
import { MessageInstance } from "antd/es/message/interface";

export interface GlobalContextType {
  bookList: Book[],
  setBookList: Dispatch<SetStateAction<Book[]>>
  readList: InterestBook[] | null,
  dispatchRl: Dispatch<ReducerAction<Reducer<InterestBook[], any>>>,
  resetBookList: Function,
  messageApi: MessageInstance | null,
  wWidth: number,
  colorMode: ColorMode
  setColorMode: Dispatch<SetStateAction<ColorMode>>
}

export interface RlAction {
  type: string,
  payload: any
}

export type ColorMode = 'light' | 'dark'