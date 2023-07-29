import { action } from 'nanostores'

import { search } from '../lib/utils'
import { isSearching, searchQuery } from './store'

/** @brief Performs a search with the given query. */
export const performSearch = action(isSearching, 'performSearch',
  (searchingStore, query: string) => {

    searchingStore.set(true)

    // Perform the search and set the searching flag to false.
    const results = search(query)
    searchingStore.set(false)

    return results
  }
)

/** @brief Sets the search query. */
export const setSearchQuery = action(searchQuery, 'setSearchQuery',
  (queryStore, query: string) => { queryStore.set(query) })
