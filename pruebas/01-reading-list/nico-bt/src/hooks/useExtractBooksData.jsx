import { useState } from "react"

export default function useExtractBooksData(books) {
  const maxPages = Math.max(...books.map((book) => book.pages))
  const minPages = Math.min(...books.map((book) => book.pages))

  let allGenres = new Set(books.map((book) => book.genre))
  allGenres = ["all", ...allGenres]

  return { maxPages, minPages, allGenres }
}
