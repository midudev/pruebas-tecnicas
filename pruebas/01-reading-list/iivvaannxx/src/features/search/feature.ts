import Fuse from 'fuse.js'

import { library } from '$features/library'
import { setIsSearching } from './store'

export const MIN_SEARCH_CHARACTERS = 3

const fuseOptions = {

  ...Fuse.config,

  includeScore: true,
  findAllMatches: true,

  threshold: 0.4,
  minMatchCharLength: MIN_SEARCH_CHARACTERS,

  keys: ['title']
}

/** @brief The fuse instance used to search the library. */
const fuse = new Fuse(library.get(), fuseOptions)

export function search (query: string) {

  // Turn on the searching flag.
  setIsSearching(true)

  // Start searching and disable it after we are done.
  const results = fuse.search(query)
  setIsSearching(false)

  return results
}
