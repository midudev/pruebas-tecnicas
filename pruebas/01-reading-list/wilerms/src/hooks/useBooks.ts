import { getBooks } from '@services/books'
import { useBooksContext } from 'contexts/books'
import { useFiltersContext } from 'contexts/filters'
import { type Book } from 'types'

const initialBooks = getBooks()

export const useBooks = () => {
  const { favoriteBooks, deleteFavoriteBook, addFavoriteBook } = useBooksContext()
  const { genresFilter, query } = useFiltersContext()


  const books = initialBooks.map((book) => {
    return {
      ...book,
      isFavorite: favoriteBooks.includes(book.ISBN)
    }
  })

  const _favoriteBooks = favoriteBooks
    .map((ISBN) => books.find(book => book.ISBN === ISBN))
    .filter(Boolean) as Book[] // TS está loco, he tenido que trampearlo XD


  const filteredBooks = books.filter((book) => {
    const isIncludedInGenres = genresFilter.includes(book.genre) || genresFilter.length === 0
    const isIncludedInQuery = (
      book.title.toLowerCase().includes(query.toLowerCase()) || 
      book.author?.name.toLowerCase().includes(query) || 
      !query || 
      book.genre.toLowerCase().includes(query.toLowerCase()) ||
      book.ISBN.toLowerCase().includes(query.toLowerCase())
    )

    return (isIncludedInGenres && isIncludedInQuery)
  })

  return {
    books: filteredBooks,
    favoriteBooks: _favoriteBooks,
    deleteFavoriteBook,
    addFavoriteBook
  }
}
