import { atom, computed } from 'nanostores'
import { MIN_SEARCH_CHARACTERS } from '../lib/constants'

/** @brief The query used to search the library. */
export const searchQuery = atom('')

/** @brief Determines if a search is currently being performed. */
export const isSearching = atom(false)

/** @brief Determines if the search results should be shown. */
export const shouldSearch = computed(searchQuery,
  (query) => query.length >= MIN_SEARCH_CHARACTERS)
