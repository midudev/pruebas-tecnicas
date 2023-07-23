import type { Filter, Genre } from "~/types"

export const BOOK_FILTERS: Filter[] = ["pages", "title", "year"]

export const BOOK_GENRES = [
  "all",
  "fantasy",
  "sci-fi",
  "horror",
  "zombies"
] as const

export const GENRES_DICT: Record<Genre, string> = {
  all: "todo",
  "sci-fi": "ciencia ficción",
  fantasy: "fantasía",
  horror: "terror",
  zombies: "zombies"
}
