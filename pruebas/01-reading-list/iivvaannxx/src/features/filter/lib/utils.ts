import type { GenreData, PagesData, FilterMap } from './types'

/** @brief Applies the given filters to the given book array. */
export function filter (books: BookArray, filters: FilterMap) {

  return Object.values(filters).reduce((books, filter) => {

    // @ts-expect-error Typescript can't infer the type of filter.data correctly, but we know that it will be always correct.
    const shouldBypass = filter.shouldBypass?.(filter.data) ?? false

    if (filter.enabled && !(shouldBypass)) {

      // @ts-expect-error Typescript can't infer the type of filter.data correctly, but we know that it will be always correct.
      return filter.filter(books, filter.data)
    }

    return books

  }, books)
}

/** @brief Filters the given book array using the given genres. */
export function filterByGenre (books: BookArray, { genres }: GenreData) {

  return books.filter(book => {

    return genres.some(genre => book.genre.includes(genre))
  })
}

/** @brief We will only filter if there are genres to filter by. */
export function shouldBypassGenreFilter ({ genres }: GenreData) {

  return genres.length === 0
}

/** @brief Filters the given book array using the given page limits. */
export function filterByPages (books: BookArray, { min, max }: PagesData) {

  return books.filter(book => {

    return book.pages >= min && book.pages <= max
  })
}

/** @brief We will only filter if the page range is positive and correct. */
export function shouldBypassPagesFilter ({ min, max }: PagesData) {

  return min < 0 || max < min
}
