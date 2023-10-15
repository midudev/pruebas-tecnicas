import { useState } from "react";
import { useLectureList } from "../context/store";

export default function useActionsBook() {
  const {books, booksInList, addBookToList, removeBookFromList, setBooks} = useLectureList((state) => state)
  const [filteredBooks, setFilteredBooks] = useState(books)
  const handleFilter = (e) => {
    const genre = e.target.value
    if(genre === 'all') {
      setFilteredBooks(books)
      return
    }
    const filtered = books.filter((book) => book.genre === genre)
    setFilteredBooks(filtered)
  }

  const handleAddList = (e) => {
    const isbn = e.target.id
    const book = filteredBooks.find((book) => book.ISBN === isbn)
    addBookToList(book)
    setFilteredBooks(filteredBooks.filter((book) => book.ISBN !== isbn))
  }

  const handleRemove = (e) => {
    const isbn = e.target.id
    const book = booksInList?.find((book) => book.ISBN === isbn)
    removeBookFromList(book)
  }

  const handleFilterBooks = (books) => {
    setFilteredBooks(books)
  }


  return {filteredBooks, handleFilter, handleAddList, handleRemove, booksInList, setBooks, handleFilterBooks, books}
}