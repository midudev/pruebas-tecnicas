import { createContext, useEffect, useRef, useState } from 'react'
import { LandingPage } from '../pages/LandingPage'
import { library } from '../books.json'

export const GlobalContext = createContext(null)

export function BooksContext () {
  const availableBooks = useRef(library)
  const [readingList, setReadingList] = useState(() => {
    const storedReadingList = window.localStorage.getItem('readingList')
    return storedReadingList ? JSON.parse(storedReadingList) : []
  })
  const [selectedGenre, setSelectedGenre] = useState(undefined)
  const [inputValue, setInputValue] = useState('')

  const addToReadingList = (ISBN) => {
    const newList = [
      ...readingList,
      availableBooks.current.find(book => book.book.ISBN === ISBN)
    ]
    setReadingList(newList)
    window.localStorage.setItem('readingList', newList)
  }

  const deleteFromList = (ISBN) => {
    const newList = readingList.filter(book => book.book.ISBN !== ISBN)
    setReadingList(newList)
    window.localStorage.setItem('readingList', newList)
  }

  const filterByGenre = selectedGenre
    ? availableBooks.current.filter(book => book.book.genre === selectedGenre)
    : availableBooks.current

  const filterBySearch = inputValue
    ? filterByGenre.filter(book => book.book.title.toLowerCase().includes(inputValue.toLowerCase()))
    : filterByGenre

  const filteredBooks = readingList
    ? filterBySearch.filter(book => !readingList.some(obj => obj.book.ISBN === book.book.ISBN))
    : filterBySearch

  const updateInputValue = (value) => {
    setInputValue(value)
  }

  const getSelectedGenre = (genre) => {
    setSelectedGenre(genre)
  }

  useEffect(() => {
    const readingListJSON = JSON.stringify(readingList)
    window.localStorage.setItem('readingList', readingListJSON)
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

  return (
    <GlobalContext.Provider value={{ availableBooks: availableBooks.current, filteredBooks, readingList, addToReadingList, deleteFromList, getSelectedGenre, selectedGenre, updateInputValue }}>
      <LandingPage />
    </GlobalContext.Provider>
  )
}
