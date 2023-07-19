'use client'

import { createContext, useReducer } from 'react'

import { bookListReducer } from '@/store/bookList'

import { BOOK_LIST_TYPES } from '@/assets/constants'
import { initialListBooks } from '@/assets/values'

import type { Book } from '@/typings/books'

type BookListProps = {
  children: JSX.Element | JSX.Element[]
}

type Payload = Pick<Book, 'ISBN'>

type BookListContext = {
  state: typeof initialListBooks
  addToReadingList: (payload: Payload) => void
  removeFromReadingList: (payload: Payload) => void
  resetReadingList: () => void
}

export const BookListContext = createContext<BookListContext | null>(null)

export function BookListProvider({ children }: BookListProps) {
  const [state, dispatch] = useReducer(bookListReducer, initialListBooks)

  const addToReadingList = (payload: Payload) => {
    dispatch({ type: BOOK_LIST_TYPES.ADD_TO_READING_LIST, payload })
  }

  const removeFromReadingList = (payload: Payload) => {
    dispatch({ type: BOOK_LIST_TYPES.REMOVE_FROM_READING_LIST, payload })
  }

  const resetReadingList = () => {
    dispatch({ type: BOOK_LIST_TYPES.RESET_READING_LIST, payload: null })
  }

  const values = {
    state,
    addToReadingList,
    removeFromReadingList,
    resetReadingList
  }

  return <BookListContext.Provider value={values}>{children}</BookListContext.Provider>
}
