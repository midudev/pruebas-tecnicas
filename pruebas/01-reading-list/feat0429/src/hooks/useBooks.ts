import { useBoundStore } from '../store/bound-store.ts'

import { getMaximumPages } from '../utils.ts'

export function useBooks () {
  const readingList = useBoundStore(state => state.booksInList)
  const availableBooks = useBoundStore(state => state.availableBooks)
  const { isLoading, isError } = useBoundStore(state => state.booksFetchResult)

  const maximumPages = getMaximumPages(availableBooks)

  const availableBooksCount = availableBooks.length - readingList.length

  return {
    availableBooks,
    maximumPages,
    availableBooksCount,
    areBooksLoading: isLoading,
    isBookRequestError: isError
  }
}
