import { FilterContext } from '@/context/filter'
import { useContext } from 'react'

export function useFilters() {
  const context = useContext(FilterContext)

  if (!context) throw new Error('useFilters must be used within a FilterContext')

  const { currentGenre, numberPages, modifiers } = context
  const { changeCurrentGenre, changeNumberPages } = modifiers

  return { currentGenre, numberPages, changeCurrentGenre, changeNumberPages }
}
