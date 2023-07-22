import { useState } from 'react'

export default function useBooksList (initialList) {
  const [availableBooks, setAvailableBooks] = useState(initialList)
  const [readList, setReadList] = useState([])

  const addToAvaiables = (books) => setAvailableBooks(prevList => [...prevList, ...Array.isArray(books) ? books : [books]])
  const removeFromAvailables = (book) => setAvailableBooks(prevList => prevList.filter(item => item !== book))
  function addToReadList (book) {
    removeFromAvailables(book)
    setReadList((prevList) => [...prevList, book])
  }
  function removeFromReadList (index) {
    setReadList((prevList) => {
      addToAvaiables(prevList[index])
      const newList = prevList.toSpliced(index, 1)
      return newList
    })
  }
  return {
    setAvailableBooks,
    availableBooks,
    addToAvaiables,
    removeFromAvailables,
    readList,
    setReadList,
    addToReadList,
    removeFromReadList
  }
}
