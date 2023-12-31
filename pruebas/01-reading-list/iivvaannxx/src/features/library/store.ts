import Books from './assets/books.json'
import { action, atom, computed } from 'nanostores'

/** @brief Defines the allowed layouts for the library. */
export type Layout = 'grid' | 'vertical-list'

/** @brief The information about the entire book library. */
export const library = atom<BookArray>(Books.library.map(current => current.book))

/** @brief The currently selected layout. */
export const currentLayout = atom<Layout>('grid')

/** @brief The genres that are present in the library. */
export const genres = computed(library, books => {

  const genres = books.map(current => current.genre)
  return Array.from(new Set(genres))
})

/** @brief The minimum and maximum number of pages in the library. */
export const pageLimits = computed(library, books => {

  const pages = books.map(current => current.pages)
  return [Math.min(...pages), Math.max(...pages)]
})

/** @brief Sets the current layout of the library. */
export const setCurrentLayout = action(currentLayout, 'setCurrentLayout', (store, layout: Layout) => {

  store.set(layout)
})
