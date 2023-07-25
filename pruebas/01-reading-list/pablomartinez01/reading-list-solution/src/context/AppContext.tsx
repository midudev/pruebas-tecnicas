import { createContext, useEffect, useState } from 'react'
import { Genres, type Book, type Filters } from '../types'

interface IAppContext {
  readBooks: Book[]
  setReadBooks: (readBooks: Book[]) => void
  filters: Filters
  setFilters: (filters: Filters) => void
}

const initialFilter = {
  genre: Genres.ALL,
  pages: 2000
}

const initialState: IAppContext = {
  readBooks: [],
  setReadBooks () {},
  filters: initialFilter,
  setFilters () {}
}
const storageList = localStorage.getItem('todo_app_list')
const initialReadList = storageList !== null ? JSON.parse(storageList) : []

export const AppContext = createContext<IAppContext>(initialState)

export function AppContextProvider ({ children }: { children: React.ReactNode }) {
  const [readBooks, setReadBooks] = useState<Book[]>(initialReadList)
  const [filters, setFilters] = useState<Filters>(initialFilter)

  useEffect(() => {
    window.addEventListener('storage', event => {
      console.log(event.key)
      if (event.key === 'todo_app_list' && event.newValue !== null) {
        const newState = JSON.parse(event.newValue)
        setReadBooks(newState)
      }
    })
  }, [])

  return (
    <AppContext.Provider value={{
      readBooks,
      setReadBooks,
      filters,
      setFilters
    }}>
      {children}
    </AppContext.Provider>
  )
}
