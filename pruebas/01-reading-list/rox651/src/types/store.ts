import { Filters, LibraryElement } from '.'

export interface UseLibraryStoreParams {
  filters: Filters
  availableBooks: number
  genres: string[]
  minPages: number
  maxPages: number
  filteredBooks: LibraryElement[]
  readlist: LibraryElement[]

  isOpenReadList: boolean

  setIsOpenReadList: (isOpenReadList: boolean) => void
  setFilteredBooks: () => void

  setFilter: ({ property, value }: { property: keyof Filters; value: string }) => void
  resetFilters: () => void
  addReadListBook: (library: LibraryElement) => void
  removeReadListBook: (library: LibraryElement) => void
}
