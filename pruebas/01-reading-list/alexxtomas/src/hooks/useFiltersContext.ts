import { FiltersContext } from '@/contexts/FiltersContext'
import { useContext } from 'react'

export function useFiltersContext() {
  const context = useContext(FiltersContext) as FiltersContext

  return context
}
