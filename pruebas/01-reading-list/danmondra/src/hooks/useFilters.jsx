import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters() {
  return useContext(FiltersContext)
}
