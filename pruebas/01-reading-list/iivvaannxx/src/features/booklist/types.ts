import type { Book } from '$types'

/** @brief Represents a persistable book list. */
export interface BookList {

  displayName: string
  books: Book[]
}
