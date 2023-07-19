import type { Filter } from "~/types"

export const BOOK_FILTERS: Filter[] = ["genre", "pages", "title", "year"]

export const BOOK_GENRES = [
  "all",
  "fantasy",
  "sci-fi",
  "horror",
  "zombies"
] as const
