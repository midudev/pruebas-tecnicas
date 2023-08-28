import { createContext } from 'react'
import type { Filters } from '@/utils/types'

export interface FiltersData {
  filters: Filters
  updateFilters: (updatedFilters: Filters) => void
}

export const FiltersContext = createContext<FiltersData | undefined>(undefined)