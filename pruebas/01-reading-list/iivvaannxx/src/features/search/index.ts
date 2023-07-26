export { default as SearchBar } from './components/bar.svelte'
export { default as GenreFilter } from '../filter/components/genre-filter.svelte'
export { default as PagesFilter } from '../filter/components/pages-filter.svelte'

export {

  isSearching,
  setIsSearching,

  searchQuery,
  setSearchQuery,

  searchResults,
  showSearchResults

} from './store'
