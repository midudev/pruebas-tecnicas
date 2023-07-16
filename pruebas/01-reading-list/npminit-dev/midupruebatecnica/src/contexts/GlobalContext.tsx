import React, { useState, useEffect, createContext } from "react";
import { Book, Library } from "../types/books";
import data from '../files/books'
import { InterestBook } from "../types/interestbook";
import { GeneralType } from "../types/globalcontext";
import * as ls from "local-storage";
import { message } from 'antd'
import { MessageInstance } from 'antd/es/message/interface';

const defValues: GeneralType = {
  bookList: [],
  setBookList: (): null => null,
  readList: [],
  setReadList: (): null => null,
  resetBookList: (): null => null,
  showReadList: false,
  setShowReadList: (): null => null
}

export const getBooksArray = (lib: Library): Book[] => lib.library.map(elem => elem.book)
export const GlobalContext = createContext<GeneralType>(defValues)

export default function GlobalContextProvider({ children }: any): JSX.Element {

  const [ bookList, setBookList ] = useState<Book[]|null>(getBooksArray(data));
  const [ readList, setReadList ] = useState<InterestBook[]|null>([]);
  const [ showReadList, setShowReadList ] = useState<boolean>(false);
  const resetBookList = () => setBookList(getBooksArray(data));
  
  useEffect(() => {
    if(!ls.get('readList')) setReadList([])
    else setReadList(ls.get('readList'))
  }, [])

  ls.on(
    "readList",
    (value: InterestBook[], old: InterestBook[], url: string) => {
      setReadList(value || []);
    }
  );

  return (
    <GlobalContext.Provider value={{
        bookList,
        setBookList,
        readList,
        setReadList,
        resetBookList,
        showReadList,
        setShowReadList
      }}>
      { children }
    </GlobalContext.Provider>
  )
}