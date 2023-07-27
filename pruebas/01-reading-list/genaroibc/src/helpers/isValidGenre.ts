import { BOOK_GENRES } from "~/constants"
import type { Genre } from "~/types"

export function isValidGenre(genre: string): genre is Genre {
  return BOOK_GENRES.includes(genre as Genre)
}
