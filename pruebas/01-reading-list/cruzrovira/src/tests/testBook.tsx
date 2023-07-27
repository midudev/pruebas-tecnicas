import React, { useEffect } from "react"
import { useBooksContext } from "../hooks/useBooksContext"
import { Book } from "../types/data"
type props = {
  initialBooks: Book[]
}
const TestBook: React.FC<props> = ({ initialBooks }) => {
  const { addBooks, books } = useBooksContext()
  useEffect(() => {
    addBooks(initialBooks)
  }, [])

  return (
    <div>
      {books.map(book => (
        <div key={book.ISBN}>{book.title}</div>
      ))}
    </div>
  )
}

export default TestBook
