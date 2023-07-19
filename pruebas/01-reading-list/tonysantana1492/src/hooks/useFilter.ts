import { type GenresAllowed } from '../types'
import { useFilterStore } from '../store/filter'
import { useCallback } from 'react'

export const useFilter = () => {
  const { genreFilter, setGenreFilter, pageFilter, setPageFilter, titleFilter, setTitleFilter } = useFilterStore()

  const updatePageFilter = useCallback(
    ({ page }: { page: number }) => {
      setPageFilter(page)
    },
    [setPageFilter]
  )

  const updateGenreFilter = useCallback(
    ({ genre }: { genre: GenresAllowed }) => {
      setGenreFilter(genre)
    },
    [setGenreFilter]
  )

  const updateTitleFilter = useCallback(
    ({ titleFilter }: { titleFilter: string }) => {
      setTitleFilter(titleFilter)
    },
    [setTitleFilter]
  )

  return {
    genreFilter,
    updateGenreFilter,
    pageFilter,
    updatePageFilter,
    titleFilter,
    updateTitleFilter
  }
}
