import { createContext } from 'react'
import { useFiltersContext } from '@/hooks/use-filter-context'

export const FiltersContext = createContext<
  ReturnType<typeof useFiltersContext> | undefined
>(undefined)

interface Props {
  children: React.ReactNode
}

export default function FiltersProvider({ children }: Props) {
  const filtersContext = useFiltersContext()

  return (
    <FiltersContext.Provider value={filtersContext}>
      {children}
    </FiltersContext.Provider>
  )
}
