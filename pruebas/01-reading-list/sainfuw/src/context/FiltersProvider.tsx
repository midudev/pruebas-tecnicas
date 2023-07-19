import { ReactNode } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { FiltersContext } from "./FiltersContext"

const initialState = {
  genre: 'all',
  pages: 0
}

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useLocalStorage('filters', initialState)

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}