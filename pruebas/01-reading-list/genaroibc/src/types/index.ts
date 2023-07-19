import type { BOOK_GENRES } from "~/constants"

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

export type Filter = keyof Book

export type Genre = (typeof BOOK_GENRES)[number]
