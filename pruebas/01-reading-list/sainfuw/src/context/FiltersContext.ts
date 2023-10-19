import { createContext } from 'react'

type ContextType = {
  filters: {
    search: string
    genre: string
    pages: number
  },
  setFilters: (filters: ContextType['filters']) => void
}

export const ContextState = {
  filters: {
    search: '',
    genre: 'all',
    pages: 0,
  },
  setFilters: () => undefined,
}

export const FiltersContext = createContext<ContextType>(ContextState)