import { createContext, useState } from 'react'
import { getMaxPages } from '../services/books.service'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const maxPages = getMaxPages()
  const [filters, setFilters] = useState({
    search: '',
    genres: [],
    pages: maxPages
  })
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
