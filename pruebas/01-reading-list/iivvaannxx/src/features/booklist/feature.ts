import { createList } from './store'

/** @brief The 3 lists created by default. */
export const DEFAULT_LISTS = {

  READING: 'Reading',
  TO_READ: 'To Read',
  FAVORITES: 'Favorites'
}

try {

  // Create the 3 default lists.
  createList(DEFAULT_LISTS.TO_READ, [])
  createList(DEFAULT_LISTS.READING, [])
  createList(DEFAULT_LISTS.FAVORITES, [])

} catch (_) { }
