import { useBoundStore } from '../store/bound-store'
import type { Book as BookType } from '../type.d.ts'

export function useSearch () {
  const searchInput = useBoundStore(state => state.searchInput)
  const updateSearchInput = useBoundStore(state => state.updateSearchInput)

  const updateSearch = (input: string) => {
    if (input == null) return

    const trimmedValue = input.toLocaleLowerCase().trim()

    if (searchInput !== trimmedValue) {
      updateSearchInput(trimmedValue)
    }
  }

  const searchBooks = (books: BookType[]) => {
    const searchResult = books.filter(book => {
      return (
        book.title.toLocaleLowerCase().includes(searchInput) ||
          book.author.name.toLocaleLowerCase().includes(searchInput) ||
          book.ISBN.toLocaleLowerCase().includes(searchInput)
      )
    })

    return searchResult
  }

  return {
    updateSearch,
    searchBooks
  }
}
