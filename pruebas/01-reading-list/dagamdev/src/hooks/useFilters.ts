import { useContext } from 'react'
import { FiltersContext, type FiltersData } from "@/contexts/FiltersContext"

export function useFilters() {
  return useContext(FiltersContext) as FiltersData
}