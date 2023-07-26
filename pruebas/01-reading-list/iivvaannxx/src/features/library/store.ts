import Books from './assets/books.json'
import { atom, computed } from 'nanostores'

/** @brief The information about the entire book library. */
export const library = atom<BookArray>(Books.library.map(current => current.book))
export const genres = computed(library, books => {

  const genres = books.map(current => current.genre)
  return Array.from(new Set(genres))
})

export const pageLimits = computed(library, books => {

  let [minPages, maxPages] = [+Infinity, -Infinity]
  books.forEach(current => {

    minPages = Math.min(minPages, current.pages)
    maxPages = Math.max(maxPages, current.pages)
  })

  return [minPages, maxPages]
})
