import { useBookStore } from '../store/useBookStore'

export function useBookZustandStore () {
  const booksState = useBookStore((state) => state.books)
  const readingListState = useBookStore((state) => state.readingList)
  const pageFilterState = useBookStore((state) => state.pageFilter)
  const genderFilterState = useBookStore((state) => state.genderFilter)
  // update all states
  const updateBooksState = useBookStore((state) => state.updateBooks)
  const updateReadingListState = useBookStore((state) => state.updateReadingList)
  const updatePageFilterState = useBookStore((state) => state.updatePageFilter)
  const updateGenderFilterState = useBookStore((state) => state.updateGenderFilter)

  return {
    books: booksState,
    readingList: readingListState,
    pageFilter: pageFilterState,
    genderFiter: genderFilterState,

    updateBooks: updateBooksState,
    updateReadingList: updateReadingListState,
    updatePageFilter: updatePageFilterState,
    updateGenderFilter: updateGenderFilterState
  }
}
