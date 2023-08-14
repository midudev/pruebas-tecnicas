import { useEffect, useState } from 'react'
import { filterBooksByGenres, getAllBooks, isInBooks } from '../services/books'
import { addOrRemoveGenre, getAllGenres } from '../services/genre'
import { addBookToReadingList, removeBookFromReadingList } from '../services/readingList'
import { getReadingListFromStorage, getReadingListFromStorageEvent } from '../storage/readingList'
import { Book } from '../types/types'

export function useBooks () {
  const [books, setBooks] = useState<Book[]>([])
  const [readingList, setReadingList] = useState<Book[]>([])
  const [selectedGenres, setSelectedGenders] = useState<string[]>([])
  const [onlyAvailablesBooks, setOnlyAvailablesBooks] = useState(false)

  const genres = getAllGenres(books)
  const filteredBooks = filterBooksByGenres(books, selectedGenres)
  const filteredBooksWrapper = filteredBooks.map(book => {
    return {
      book,
      inReadingList: isInBooks(readingList, book)
    }
  })

  useEffect(() => {
    // get all books
    getAllBooks().then(books => {
      // initialize all books
      setBooks(books)

      // initialize reading list with books saved in storage
      const readingList = getReadingListFromStorage(books)
      setReadingList(readingList)
    })

    // handler to detect if the reading list has been modified in the context of another document
    const handleStorage = (event: StorageEvent) => {
      const readingList = getReadingListFromStorageEvent(books, event)
      if (readingList !== undefined) {
        setReadingList(readingList)
      }
    }

    // register the handler
    window.addEventListener('storage', handleStorage)

    return () => {
      // unregister the handler
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const addToReadingList = (book: Book) => {
    setReadingList(readingList => {
      return addBookToReadingList(readingList, book)
    })
  }

  const removeFromReadingList = (book: Book) => {
    setReadingList(readingList => {
      return removeBookFromReadingList(readingList, book)
    })
  }

  const toggleGenre = (genre: string) => {
    setSelectedGenders((selectedGenres) => {
      return addOrRemoveGenre(selectedGenres, genre)
    })
  }

  const toggleOnlyAvailableBooks = () => {
    setOnlyAvailablesBooks((value) => !value)
  }

  return {
    filteredBooksWrapper,
    readingList,
    filteredBooks,
    genres,
    selectedGenres,
    onlyAvailablesBooks,
    addToReadingList,
    removeFromReadingList,
    toggleGenre,
    toggleOnlyAvailableBooks
  }
}
