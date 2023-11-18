'use client'

import { createContext, useEffect, useReducer } from 'react'

import { bookListReducer } from '@/store/bookList'

import { BOOK_LIST_TYPES, nameStorage } from '@/assets/constants'
import { BookDataList, currentListBooks } from '@/assets/values'

import type { Book } from '@/typings/books'

type BookListProps = {
  children: JSX.Element | JSX.Element[]
}

type Payload = Pick<Book, 'ISBN'>

type BookListContext = {
  state: typeof currentListBooks
  addToReadingList: (payload: Payload) => void
  removeFromReadingList: (payload: Payload) => void
  resetReadingList: () => void
}

export const BookListContext = createContext<BookListContext | null>(null)

export function BookListProvider({ children }: BookListProps) {
  const [state, dispatch] = useReducer(bookListReducer, currentListBooks)

  const addToReadingList = (payload: Payload) => {
    dispatch({ type: BOOK_LIST_TYPES.ADD_TO_READING_LIST, payload })
  }

  const removeFromReadingList = (payload: Payload) => {
    dispatch({ type: BOOK_LIST_TYPES.REMOVE_FROM_READING_LIST, payload })
  }

  const resetReadingList = () => {
    dispatch({ type: BOOK_LIST_TYPES.RESET_READING_LIST, payload: null })
  }

  useEffect(() => {
    const updateLists = (ev: StorageEvent) => {
      const { key, oldValue, newValue } = ev
      if (key !== nameStorage.listOfReading) return

      if (oldValue === null && newValue) {
        const newValueParse: BookDataList = JSON.parse(newValue)
        const { ISBN } = newValueParse[0]

        addToReadingList({ ISBN })
      }

      if (newValue === null && oldValue) {
        resetReadingList()
      }

      if (oldValue && newValue) {
        const newValueParse: BookDataList = JSON.parse(newValue)
        const oldValueParse: BookDataList = JSON.parse(oldValue)

        if (oldValueParse.length < newValueParse.length) {
          const book = newValueParse.find(({ ISBN }) =>
            oldValueParse.every((oldBook) => ISBN !== oldBook.ISBN)
          )

          if (book) addToReadingList({ ISBN: book.ISBN })
        }

        if (oldValueParse.length > newValueParse.length) {
          const book = oldValueParse.find(({ ISBN }) =>
            newValueParse.every((book) => ISBN !== book.ISBN)
          )

          if (book) removeFromReadingList({ ISBN: book.ISBN })
        }
      }
    }

    window.addEventListener('storage', updateLists)

    return () => window.removeEventListener('storage', updateLists)
  }, [])

  const values = {
    state,
    addToReadingList,
    removeFromReadingList,
    resetReadingList
  }

  return <BookListContext.Provider value={values}>{children}</BookListContext.Provider>
}
