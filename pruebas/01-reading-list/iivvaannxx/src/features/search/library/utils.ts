import { FUSE_INSTANCE } from './constants'

/** @brief Searches the library for the given query. */
export function search (query: string) {

  const results = FUSE_INSTANCE.search(query)
  return results.map(result => result.item)
}
