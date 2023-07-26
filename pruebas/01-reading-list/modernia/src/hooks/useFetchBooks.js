import { useState, useEffect } from "react"

export default function useFetchBooks() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("./books.json").then((res) => res.json()).then((data) => {
      setBooks(data.library.map(({book}) => {
        return book
      }))
    })
  }, [])

  return books
}