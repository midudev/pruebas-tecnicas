import { createList } from './store'
import { ReadingIcon, WantToReadIcon, FavoriteIcon } from '$lib/icons'

/** @brief The 3 lists created by default. */
export const DEFAULT_LISTS = {

  TO_READ: 'Quiero Leer',
  READING: 'Leyendo',
  FAVORITES: 'Favoritos'
}

/** @brief The icons for each list. */
export const LISTS_ICONS = {

  [DEFAULT_LISTS.TO_READ]: WantToReadIcon,
  [DEFAULT_LISTS.READING]: ReadingIcon,
  [DEFAULT_LISTS.FAVORITES]: FavoriteIcon
}

/** @brief All the names of the default lists. */
export const defaultListNames = Object.values(DEFAULT_LISTS)

/** @brief Initializes the booklist feature. */
export function initialize () {

  try {

    // Create the 3 default lists.
    createList(DEFAULT_LISTS.TO_READ, [])
    createList(DEFAULT_LISTS.READING, [])
    createList(DEFAULT_LISTS.FAVORITES, [])

  } catch (_) { }
}
