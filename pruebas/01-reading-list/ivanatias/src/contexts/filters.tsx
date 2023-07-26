import { createContext } from 'react'
import { useFiltersContext } from '@/hooks/use-filter-context'

const STORAGE_KEY = 'filters'

export const FiltersContext = createContext<
  ReturnType<typeof useFiltersContext> | undefined
>(undefined)

interface Props {
  children: React.ReactNode
  storageKey?: string
}

export default function FiltersProvider({
  children,
  storageKey = STORAGE_KEY
}: Props) {
  const filtersContext = useFiltersContext(storageKey)

  return (
    <FiltersContext.Provider value={filtersContext}>
      {children}
    </FiltersContext.Provider>
  )
}
