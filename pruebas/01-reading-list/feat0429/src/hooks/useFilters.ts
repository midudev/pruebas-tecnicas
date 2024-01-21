import { useBoundStore } from '../store/bound-store.ts'
import type { Book as BookType } from '../type.d.ts'
import { Genre } from '../constants/genres.ts'

export function useFilters () {
  const pagesFilter = useBoundStore(state => state.pagesFilter)
  const updatePagesFilter = useBoundStore(state => state.updatePagesFilter)
  const genreFilter = useBoundStore(state => state.genreFilter)
  const updateGenreFilter = useBoundStore(state => state.updateGenreFilter)

  const filterBooks = (books: BookType[]) => {
    return books.filter(book => (
      book.pages >= pagesFilter &&
        (
          genreFilter === Genre.All ||
          genreFilter === book.genre
        )
    ))
  }

  return {
    pagesFilter,
    updatePagesFilter,
    genreFilter,
    updateGenreFilter,
    filterBooks
  }
}
