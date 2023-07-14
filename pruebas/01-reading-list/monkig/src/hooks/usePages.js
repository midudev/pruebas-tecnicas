import { parseredBooks } from './useBooks'
import { useState, useEffect } from 'react'

export default function usePages () {
  const allPages = parseredBooks.map(book => book.pages)
  const [pages, setPages] = useState([])

  useEffect(() => {
    const uniquePages = allPages.filter((page, index, self) => self.indexOf(page) === index).sort((a, b) => a - b)

    setPages(uniquePages)
  }, [])
  return { pages }
}
