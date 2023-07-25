import { createContext, useState } from 'react'
import { Genres, type Book, type Filters } from '../types'

interface IAppContext {
  readBooks: Book[]
  setReadBooks: (readBooks: Book[]) => void
  filters: Filters
  setFilters: (filters: Filters) => void
}

const initialFilter = {
  genre: Genres.ALL,
  pages: 0
}

const initialState: IAppContext = {
  readBooks: [],
  setReadBooks () {},
  filters: initialFilter,
  setFilters () {}
}

export const AppContext = createContext<IAppContext>(initialState)

export function AppContextProvider ({ children }: { children: React.ReactNode }) {
  const [readBooks, setReadBooks] = useState<Book[]>([])
  const [filters, setFilters] = useState<Filters>(initialFilter)

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
