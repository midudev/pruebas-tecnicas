import { useState } from 'react'

export default function useBooksList (initialList) {
  const [availableBooks, setAvailableBooks] = useState(initialList)
  const [readList, setReadList] = useState([])
  const [readListHasBooks, setReadListHasBooks] = useState(false)

  const addToAvaiables = (books) => setAvailableBooks(prevList => [...prevList, ...Array.isArray(books) ? books : [books]])
  const removeFromAvailables = (book) => setAvailableBooks(prevList => prevList.filter(item => item !== book))
  function addToReadList (book) {
    removeFromAvailables(book)
    setReadList((prevList) => [...prevList, book])
    if (!readListHasBooks) setReadListHasBooks(true)
  }
  function removeFromReadList (index) {
    setReadList((prevList) => {
      addToAvaiables(prevList[index])
      const newList = prevList.toSpliced(index, 1)
      if (newList.length === 0) setReadListHasBooks(false)
      return newList
    })
  }
  return {
    setAvailableBooks,
    availableBooks,
    addToAvaiables,
    removeFromAvailables,
    readList,
    addToReadList,
    removeFromReadList,
    readListHasBooks
  }
}
