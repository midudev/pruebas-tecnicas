import type { Filter, Genre } from "~/types"

export const BOOK_FILTERS = ["pages", "title", "year"] as const

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

export const FILTERS_DICT: Record<Filter, string> = {
  pages: "páginas",
  title: "título",
  year: "año"
}

export const LOCAL_STORAGE_KEYS = {
  books: "__books_list__",
  readingList: "__reading_list__",
  filter: "__filter__",
  genre: "__genre__"
} as const
