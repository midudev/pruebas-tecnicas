import { useContext } from 'react'

import { type LibraryElement } from '../types'
import { BOOK_GENRES, FilterContext } from '../context/context'

export function useFilterBooks (library: LibraryElement[]) {
  const { filter, setFilter } = useContext(FilterContext)
  const filterBooks = library.filter((ele: LibraryElement) => {
    if (filter === BOOK_GENRES.ALL) return true
    else return filter === ele.book.genre
  })

  const handleChageCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter!(event.target.value as BOOK_GENRES)
  }
  return { filter, setFilter, handleChageCategory, filterBooks }
}
