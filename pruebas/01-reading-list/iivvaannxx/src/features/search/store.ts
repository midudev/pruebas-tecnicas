import { action, atom, computed } from 'nanostores'
import { MIN_SEARCH_CHARACTERS, search } from './feature'

/** @brief The query used to search the library. */
export const searchQuery = atom('')

/** @brief Determines if the app is currently searching. */
export const isSearching = atom(false)

/** @brief Determines if the search results should be shown. */
export const showSearchResults = computed(searchQuery, (query) => {

  return (query.length >= MIN_SEARCH_CHARACTERS)
})

/** @brief The results of the search. */
export const searchResults = computed(searchQuery, (query) => {

  const results = search(query)
  return results.map(result => result.item)
})

/** @brief Sets the searching flag. */
export const setIsSearching = action(isSearching, 'setIsSearching',
  (searchingFlagStore, isSearching: boolean) => { searchingFlagStore.set(isSearching) })

/** @brief Sets the search query. */
export const setSearchQuery = action(searchQuery, 'setSearchQuery',
  (queryStore, query: string) => { queryStore.set(query) })
