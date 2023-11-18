import { useContext } from 'react'
import { FilterContext } from '@/context/filter'

export function useFilters() {
  const context = useContext(FilterContext)

  if (!context) throw new Error('useFilters must be used within a FilterContext')

  const {
    filters: { range, currentGenre },
    modifiers: { changeCurrentGenre, changeNumberPages }
  } = context

  return { currentGenre, range, changeCurrentGenre, changeNumberPages }
}
