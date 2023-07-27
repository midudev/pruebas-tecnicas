import type { BOOK_FILTERS, BOOK_GENRES } from "~/constants"

export type BookISBN = string
export type BookAuthor = {
  name: string
  otherBooks: string[]
}

export type Book = {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: BookISBN
  author: BookAuthor
  isInReadingList: boolean
}

export type Filter = (typeof BOOK_FILTERS)[number]

export type Genre = (typeof BOOK_GENRES)[number]
