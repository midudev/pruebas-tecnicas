import { useState, createContext, ReactNode } from 'react'
import { type FiltersType } from '../types'

export const FiltersContext = createContext({})

export function FiltersProvider ({ children }: {children: ReactNode}) {
  const [filters, setFilters] = useState<FiltersType>({
    genre: 'all'
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
