import Books from '../assets/data/books.json'
import { atom, computed } from 'nanostores'

import type { Layout } from '../lib/types'

/** @brief The information about the entire book library. */
export const library = atom<BookArray>(Books.library.map(current => current.book))

/** @brief The currently selected layout. */
export const currentLayout = atom<Layout>('grid')

/** @brief The genres that are present in the library. */
export const genres = computed(library,

  (books) => {

    const genres = books.map(current => current.genre)
    return Array.from(new Set(genres))
  }
)

/** @brief The minimum and maximum number of pages in the library. */
export const pageLimits = computed(library,

  (books) => {

    const pages = books.map(current => current.pages)
    return [Math.min(...pages), Math.max(...pages)]
  }
)
