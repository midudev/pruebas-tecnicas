import { createContext, useContext, useState } from 'react'
import { DEFAULT_FILTERS } from '../utils/constants'

const context = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(JSON.parse(window.localStorage.getItem('filters')) || DEFAULT_FILTERS)
  return (
    <context.Provider value={{ filters, setFilters }}>
      {children}
    </context.Provider>
  )
}

export function useFiltersContext () {
  const filterContext = useContext(context)
  return filterContext
}
