import type { BooksData } from '$types'
import Books from '$assets/data/books.json'

/** @brief Retrieves all the books of the library. */
function preloadBookData (): BooksData {

  const library = Books.library.map(current => current.book)

  const genres = library.map(current => current.genre)
  const uniqueGenres = [...new Set(genres)]

  return { library, genres: uniqueGenres }
}

// Helper caches to avoid repeating calculations.
export const booksData = preloadBookData()
