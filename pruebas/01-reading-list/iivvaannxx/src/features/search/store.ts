import { action, atom, computed } from 'nanostores'
import { MIN_SEARCH_CHARACTERS, search } from './feature'

export const searchQuery = atom<string>('')

export const showSearchResults = computed(searchQuery, (query) => {

  return (query.length >= MIN_SEARCH_CHARACTERS)
})

export const isSearching = atom(false)

export const searchResults = computed(searchQuery, (query) => {

  const results = search(query)
  return results.map(result => result.item)
})

export const setIsSearching = action(isSearching, 'setIsSearching',
  (searchingFlagStore, isSearching: boolean) => { searchingFlagStore.set(isSearching) })

export const setSearchQuery = action(searchQuery, 'setSearchQuery',
  (queryStore, query: string) => { queryStore.set(query) })
