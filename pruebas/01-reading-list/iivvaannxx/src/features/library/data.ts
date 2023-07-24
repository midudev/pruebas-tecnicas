import type { BooksData, Book } from '$types'
import Books from '$assets/data/books.json'

/** @brief Retrieves all the books of the library. */
function preloadBookData (): BooksData {

  const library = new Map<string, Book>()
  const genres = new Set<string>()

  let [minPages, maxPages] = [+Infinity, -Infinity]

  Books.library.forEach(current => {

    const book = current.book
    genres.add(book.genre)
    library.set(book.ISBN, book)

    // Save the minimum and maximum number of pages (used to filter).
    minPages = Math.min(minPages, book.pages)
    maxPages = Math.max(maxPages, book.pages)
  })

  return {

    library: Array.from(library.values()),
    genres: Array.from(genres),

    pageLimits: [minPages, maxPages]
  }
}

/** @brief The information about the entire book library. */
export const booksData = preloadBookData()
