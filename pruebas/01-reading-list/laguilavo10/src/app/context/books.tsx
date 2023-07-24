'use client'
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { library } from '../utils/data-books'
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

const INITIAL_STATE_VALUE = {
  bookList: [],
  readingList: []
}

const DEFAULT_VALUE: Reducer = {
  state: INITIAL_STATE_VALUE,
  dispatch: () => {}
}

const BookLandContext = createContext<Reducer>(DEFAULT_VALUE)

const getLocalStorageData = () => {
  if (typeof window === 'undefined') {
    return {
      bookList: [],
      readingList: []
    }
  }
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

export function CategoryProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE_VALUE)

  useEffect(() => {
    const initialData = getLocalStorageData()
    dispatch({ type: 'UpdateTabs', payload: initialData })
  }, [])

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
