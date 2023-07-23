import { useEffect, useState } from 'react'
import { useBookStore } from '../store/bookStore'

export function useBook () {
  const booksStore = useBookStore(state => state.books)
  const readingListStore = useBookStore(state => state.readingList)
  const genres = useBookStore(state => state.genres)
  const addBook = useBookStore(state => state.addBook)
  const removeBook = useBookStore(state => state.removeBook)

  const getBooksLocalStorage = () => {
    return {
      booksLocal: JSON.parse(window.localStorage.getItem('books')),
      booksListLocal: JSON.parse(window.localStorage.getItem('readingList'))
    }
  }

  const [genre, setGenres] = useState('All')
  const [books, setBooks] = useState(getBooksLocalStorage().booksLocal || booksStore)
  const [readingList, setReadingList] = useState(getBooksLocalStorage().booksListLocal || readingListStore)

  useEffect(() => {
    if (genre !== 'All') {
      const filteredBooks = booksStore.filter(book => book.genre === genre)
      setBooks(filteredBooks)
    } else {
      setBooks(booksStore)
    }
  }, [genre, booksStore])

  useEffect(() => {
    let { booksListLocal, booksLocal } = getBooksLocalStorage()

    if (!booksListLocal && !booksLocal) {
      booksListLocal = readingListStore
      booksLocal = booksStore
    }

    setReadingList(booksListLocal)
    setBooks(booksLocal)
  }, [booksStore, readingListStore])

  useEffect(() => {
    // Create a function to handle changes to localStorage
    const storageEvent = (event) => {
      const { key, newValue } = event
      console.log(key)
      if (key === 'books') {
        // console.log(JSON.parse(newValue))
        setBooks(JSON.parse(newValue))
      } else if (key === 'readingList') {
        // console.log(JSON.parse(newValue))
        setReadingList(JSON.parse(newValue))
      }
    }

    // Register a listener for changes to localStorage
    window.addEventListener('storage', storageEvent)

    // Return a function to remove the listener when the component is unmounted
    return () => {
      window.removeEventListener('storage', storageEvent)
    }
  }, [])

  const filterByGenre = (genre) => {
    setGenres(genre)
  }

  const handleAddBook = (book) => {
    addBook(book)
    window.localStorage.setItem('readingList', JSON.stringify([...readingList, book]))
    window.localStorage.setItem('books', JSON.stringify(books.filter(b => b.id !== book.id)))
  }

  const handleRemoveBook = (id) => {
    removeBook(id)
    window.localStorage.setItem('readingList', JSON.stringify(readingList.filter(b => b.id !== id)))
    window.localStorage.setItem('books', JSON.stringify([...books, readingList.find(b => b.id === id)]))
  }

  return {
    books,
    readingList,
    genres,
    genre,
    filterByGenre,
    handleAddBook,
    handleRemoveBook
  }
}
