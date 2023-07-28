import { useEffect, useState } from 'react'
import data from '../services/books.json'
import { notifyAdded, notifyRemoved } from '../logic/notifications'

const localStorage = window.localStorage
const crypto = window.crypto

export function useBooks () {
  const [available, setAvailable] = useState([])
  const [myList, setMyList] = useState([])
  const [filterByGenre, setFilterByGenre] = useState('')
  const [filterByPages, setFilterByPages] = useState([])

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
    const toRead = [...myList, book]
    setMyList(toRead)
    localStorage.setItem('myList', JSON.stringify(toRead))

    let updateAvailable = available.filter((el) => el.book.title !== book.title)
    updateAvailable = [...updateAvailable]
    setAvailable(updateAvailable)
    localStorage.setItem('available', JSON.stringify(updateAvailable))
    notifyAdded()
  }

  function handleRemoveClick (book) {
    const updateList = myList.filter((el) => el.title !== book.title)
    setMyList(updateList)
    localStorage.setItem('myList', JSON.stringify(updateList))
    notifyRemoved()
  }

  useEffect(() => {
    window.addEventListener('storage', () => {
      const localStorageData = localStorage.getItem('myList')
      const storedData = JSON.parse(localStorageData)
      if (storedData) {
        setMyList(storedData)
      }
    })
  }, [])

  useEffect(() => {
    const localStorageData = localStorage.getItem('myList')
    const storedData = JSON.parse(localStorageData)
    if (storedData) {
      setMyList(storedData)
    }
  }, [])

  return {
    available,
    myList,
    filterByGenre,
    setFilterByGenre,
    filterByPages,
    setFilterByPages,
    handleAddClick,
    handleRemoveClick,
    localStorage,
    crypto
  }
}
