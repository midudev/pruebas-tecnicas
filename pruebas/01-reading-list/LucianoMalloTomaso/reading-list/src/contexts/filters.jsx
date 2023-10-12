import { createContext, useState } from 'react'

// Create context
export const FiltersContext = createContext()

// Provider component

export function FiltersProvider ({ children }) {
  // Define context values here
  const [filters, setFilters] = useState({
    genre: 'all',
    minPages: 0,
    orderByTitle: false
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
