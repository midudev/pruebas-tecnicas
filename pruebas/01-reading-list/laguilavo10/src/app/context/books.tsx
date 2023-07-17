'use client'
import { PropsWithChildren, createContext, useContext, useReducer } from 'react'
import { library } from '../../../../books.json'
import type { Book, Books } from '../types'

export interface BooksContext {
  bookList: Book[]
  readingList: Book[]
}

interface Reducer {
  state: BooksContext
  dispatch: React.Dispatch<Action>
}

export type ActionType = 'AddToReadingList' | 'RemoveFromReadingList'

interface Action {
  type: ActionType
  payload: Book
}

export const DEFAULT_VALUE: Reducer = {
  state: {
    bookList: (() => {
      return library.map((b: Books) => b.book)
    })(),
    readingList: []
  },
  dispatch: () => {}
}

const BookLandContext = createContext<Reducer>(DEFAULT_VALUE)

const reducer = (state: BooksContext, action: Action) => {
  console.log(action, state)
  const { payload, type } = action
  const { bookList, readingList } = state

  switch (type) {
    case 'AddToReadingList': {
      const alreadyIn = readingList.includes(action.payload)
      if (alreadyIn) return state
      return {
        bookList: [...bookList],
        readingList: [...readingList, payload]
      }
    }
    case 'RemoveFromReadingList': {
      const withoutBook = readingList.filter((b) => b.ISBN !== payload.ISBN)
      return {
        bookList: [...bookList],
        readingList: withoutBook
      }
    }
  }
}

export function CategoryProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE.state)
  return (
    <BookLandContext.Provider value={{ state, dispatch }}>
      {children}
    </BookLandContext.Provider>
  )
}

export const useBooks = () => {
  const { state, dispatch } = useContext(BookLandContext)
  return { state, dispatch }
}
