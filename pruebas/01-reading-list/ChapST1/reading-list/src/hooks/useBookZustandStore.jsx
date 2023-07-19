import { useBookStore } from '../store/useBookStore'

export function useBookZustandStore () {
  const books = useBookStore((state) => state.books)
  const readingList = useBookStore((state) => state.readingList)
  const pageFilter = useBookStore((state) => state.pageFilter)
  const genderFilter = useBookStore((state) => state.genderFilter)
  // update all states
  const updateBooks = useBookStore((state) => state.updateBooks)
  const updateReadingList = useBookStore((state) => state.updateReadingList)
  const updatePageFilter = useBookStore((state) => state.updatePageFilter)
  const updateGenderFilter = useBookStore((state) => state.updateGenderFilter)

  return {
    books,
    readingList,
    pageFilter,
    genderFilter,

    updateBooks,
    updateReadingList,
    updatePageFilter,
    updateGenderFilter
  }
}
