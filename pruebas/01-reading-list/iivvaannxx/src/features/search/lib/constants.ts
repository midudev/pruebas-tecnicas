import Fuse from 'fuse.js'
import { library } from '$features/library'

/** @brief The minimum number of characters required to start searching. */
export const MIN_SEARCH_CHARACTERS = 2

/** @brief The options used to configure the fuse instance. */
export const FUSE_OPTIONS = {

  ...Fuse.config,

  includeScore: true,
  findAllMatches: true,

  threshold: 0.4,
  minMatchCharLength: MIN_SEARCH_CHARACTERS,

  keys: ['title']
}

/** @brief The fuse instance used to search the library. */
export const FUSE_INSTANCE = new Fuse(library.get(), FUSE_OPTIONS)
