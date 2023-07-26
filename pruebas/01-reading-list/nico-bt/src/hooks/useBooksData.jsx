import { useEffect, useState } from "react"
import data from "../../../books.json"

export default function useBooksData() {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setBooks(data.library.map((item) => item.book))
  }, [])

  return { books, setBooks, error, isLoading }
}
