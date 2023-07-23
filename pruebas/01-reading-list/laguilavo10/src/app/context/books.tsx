'use client'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { library } from '../utils/books'
import type { Book, Books } from '../types'
import { Action, reducer } from '../utils/reducer'

export interface BooksContext {
  bookList: Book[]
  readingList: Book[]
}

interface Reducer {
  state: BooksContext
  dispatch: React.Dispatch<Action>
}

export type ActionType = 'AddToReadingList' | 'RemoveFromReadingList'

const DEFAULT_VALUE_STATE = () => {
  if (typeof window === 'undefined') return
  const books = window.localStorage.getItem('books')
  if (typeof books === 'string') {
    return JSON.parse(books)
  }
  const initialState = {
    bookList: (() => library.map((b: Books) => b.book))(),
    readingList: []
  }
  window.localStorage.setItem('books', JSON.stringify(initialState))
  return initialState
}

export const DEFAULT_VALUE: Reducer = {
  state: DEFAULT_VALUE_STATE(),
  dispatch: () => {}
}

const BookLandContext = createContext<Reducer>(DEFAULT_VALUE)

export function CategoryProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE.state)
  useEffect(() => {
    const refreshTabs = (evt: StorageEvent) => {
      if (evt.key !== 'books') return
      const newState = JSON.parse(evt.newValue as string)
      dispatch({ type: 'UpdateTabs', payload: newState })
    }
    window.addEventListener('storage', refreshTabs)
    return () => {
      window.removeEventListener('storage', refreshTabs)
    }
  }, [state])

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
