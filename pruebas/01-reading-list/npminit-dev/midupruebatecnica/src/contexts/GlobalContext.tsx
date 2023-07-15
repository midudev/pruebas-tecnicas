import React, { useState, useEffect, createContext } from "react";
import { Book, Library } from "../types/books";
import data from '../files/books'
import { InterestBook } from "../types/interestbook";
import { GeneralType } from "../types/globalcontext";
import * as ls from "local-storage";

const defValues: GeneralType = {
  bookList: [],
  setBookList: (): null => null,
  readList: [],
  setReadList: (): null => null,
  resetBookList: (): null => null
}

export const getBooksArray = (lib: Library): Book[] => lib.library.map(elem => elem.book)

export const GlobalContext = createContext<GeneralType>(defValues)

export default function GlobalContextProvider({ children }: any): JSX.Element {

  const [ bookList, setBookList ] = useState<Book[]|null>(getBooksArray(data));
  const [ readList, setReadList ] = useState<InterestBook[]|null>(null);
  const resetBookList = () => setBookList(getBooksArray(data))
  
  useEffect(() => {
    console.log(bookList)
  }, [bookList])

  useEffect(() => {
    if(ls.get<InterestBook[]>('readingList')) {
      setReadList(ls.get<InterestBook[]>('readingList'))
      console.log('readingList on localStorage loaded')
    }
    else {
      ls.set('readingList', [
        {
          title: "Juego de Tronos",
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
          author: "George R. R. Martin",
          read: false
        }, 
        {
          title: "Dune",
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
          author: "Frank Herbert",
          read: true
        }
    ])
    console.log('fake readlist settled on localStorage')
  }
  }, [])


  return (
    <GlobalContext.Provider value={{
        bookList,
        setBookList,
        readList,
        setReadList,
        resetBookList
      }}>
      { children }
    </GlobalContext.Provider>
  )
}