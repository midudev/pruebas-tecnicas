import { useEffect, useRef, useState } from 'react'
import { library } from '../books.json'

const updateLocalStorage = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data))
}

export function useBooks () {
  const availableBooks = useRef(library)
  const [readingList, setReadingList] = useState(() => {
    const storedReadingList = window.localStorage.getItem('readingList')
    return storedReadingList ? JSON.parse(storedReadingList) : []
  })
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const addToReadingList = (ISBN) => {
    const newList = [
      ...readingList,
      availableBooks.current.find(book => book.book.ISBN === ISBN)
    ]
    setReadingList(newList)
    updateLocalStorage('readingList', newList)
  }

  const deleteFromList = (ISBN) => {
    const newList = readingList.filter(book => book.book.ISBN !== ISBN)
    setReadingList(newList)
    updateLocalStorage('readingList', newList)
  }

  const filterByGenre = selectedGenre
    ? library.filter(book => book.book.genre === selectedGenre)
    : library

  const filterBySearch = inputValue
    ? filterByGenre.filter(book => book.book.title.toLowerCase().includes(inputValue.toLowerCase()))
    : filterByGenre

  const filteredBooks = filterBySearch.filter(book => !readingList.some(obj => obj.book.ISBN === book.book.ISBN))

  const updateInputValue = (value) => {
    setInputValue(value)
  }

  const getSelectedGenre = (genre) => {
    setSelectedGenre(genre)
  }

  useEffect(() => {
    updateLocalStorage('readingList', readingList)
  }, [readingList])

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'readingList') {
        setReadingList(JSON.parse(e.newValue))
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return { availableBooks: availableBooks.current, filteredBooks, readingList, addToReadingList, deleteFromList, getSelectedGenre, selectedGenre, updateInputValue }
}
