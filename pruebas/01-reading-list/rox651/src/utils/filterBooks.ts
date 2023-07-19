import { FilterBooksProps, LibraryElement } from '../types'

export const filterBooks = ({ books, filters }: FilterBooksProps): LibraryElement[] => {
  let updatedBooks = books
  const { genre, query, pages } = filters

  if (query) {
    const queryLowerCase = query.toLowerCase()
    updatedBooks = filterBooksForQuery(updatedBooks, queryLowerCase)
  }

  if (genre) {
    updatedBooks = filterBooksForGenre(updatedBooks, genre)
  }

  if (pages) {
    updatedBooks = filterBooksForPages(updatedBooks, pages)
  }

  return updatedBooks
}

const filterBooksForQuery = (updatedBooks: LibraryElement[], query: string) =>
  updatedBooks.filter((libraryElement) => libraryElement.book.title.toLowerCase().startsWith(query))

const filterBooksForGenre = (updatedBooks: LibraryElement[], genre: string) => updatedBooks.filter((libraryElement) => libraryElement.book.genre === genre)

const filterBooksForPages = (updatedBooks: LibraryElement[], pages: number) => updatedBooks.filter((libraryElement) => libraryElement.book.pages <= pages)
