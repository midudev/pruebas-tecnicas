import { useEffect, useState } from 'react'
import data from '../services/books.json'

const localStorage = window.localStorage
const crypto = window.crypto

export function useBooks () {
  const [available, setAvailable] = useState([])
  const [myList, setMyList] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (myList.length === 0) {
      const availableBooks = data.library
      setAvailable(availableBooks)
    } else {
      const availableBooks = data.library.filter((el) => {
        const isInMyList = myList.some((book) => book.title === el.book.title)
        return !isInMyList
      })
      setAvailable(availableBooks)
    }
  }, [myList])

  function handleAddClick (book) {
    console.log('add ' + book.title + '  to my list')
    const toRead = [...myList, book]
    setMyList(toRead)
    localStorage.setItem('myList', JSON.stringify(toRead))

    let updateAvailable = available.filter((el) => el.book.title !== book.title)
    updateAvailable = [...updateAvailable]
    setAvailable(updateAvailable)
    localStorage.setItem('available', JSON.stringify(updateAvailable))
  }

  function handleRemoveClick (book) {
    console.log('remove ' + book.title + '  from my list')
    const updateList = myList.filter((el) => el.title !== book.title)
    setMyList(updateList)
    localStorage.setItem('myList', JSON.stringify(updateList))
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem('myList')
    const storedData = JSON.parse(localStorageData)
    if (storedData) {
      setMyList(storedData)
    }
  }, [])

  console.log(myList)

  return {
    available,
    myList,
    filter,
    setFilter,
    handleAddClick,
    handleRemoveClick,
    localStorage,
    crypto
  }
}
