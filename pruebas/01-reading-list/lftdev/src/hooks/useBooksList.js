import { useState } from 'react'

export default function useBooksList () {
  const [availableBooks, setAvailableBooks] = useState([])
  const [readList, setReadList] = useState([])

  const addToAvailables = (book) => setAvailableBooks(prevList => prevList.toSpliced(prevList.length, 1, book))

  const removeFromAvailables = (book) => setAvailableBooks(prevList => prevList.filter(item => item !== book))

  function addToReadList (book) {
    removeFromAvailables(book)
    setReadList(prevList => prevList.toSpliced(prevList.length, 1, book))
  }

  function removeFromReadList (index) {
    setReadList(prevList => {
      addToAvailables(prevList[index])
      const newList = prevList.toSpliced(index, 1)
      return newList
    })
  }
  return {
    availableBooks,
    setAvailableBooks,
    addToAvailables,
    removeFromAvailables,
    readList,
    setReadList,
    addToReadList,
    removeFromReadList
  }
}
