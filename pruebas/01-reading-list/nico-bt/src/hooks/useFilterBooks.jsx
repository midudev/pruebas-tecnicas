import { useState } from "react"

export default function useFilterBooks(maxPages) {
  const [filter, setFilter] = useState({
    genre: "all",
    maxPages: maxPages,
    sortByPages: "default",
  })

  const filterBooks = (books, filter) => {
    let filteredBooks

    // By Genre
    //-----------------------------------------------------------
    if (filter.genre === "all") {
      filteredBooks = books.filter((book) => book.pages <= filter.maxPages)
    } else {
      filteredBooks = books.filter(
        (book) => book.genre === filter.genre && book.pages <= filter.maxPages
      )
    }

    // By num of pages
    //-----------------------------------------------------------
    if (filter.sortByPages === "lowest") {
      filteredBooks.sort((a, b) => a.pages - b.pages)
    }

    if (filter.sortByPages === "highest") {
      filteredBooks.sort((a, b) => b.pages - a.pages)
    }

    return filteredBooks
  }

  return { filterBooks, filter, setFilter }
}
