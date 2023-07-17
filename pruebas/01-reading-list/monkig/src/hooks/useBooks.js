import { useEffect, useState } from 'react'
import jsonData from './../mocks/books.json'
import useLocalStorage from './useLocalStorage'

export default function useBooks () {
  const parseredBooks = jsonData.library.map(item => item.book)
  const allGenres = parseredBooks.map(book => book.genre)
  const allPages = parseredBooks.map(book => book.pages)

  const [availableBooks, setAvailableBooks] = useLocalStorage('availableBooks')
  const [genres, setGenres] = useState([])
  const [pages, setPages] = useState({
    pages: [],
    max: null,
    min: null
  })
  const [booksFilter, setBooksFilter] = useState({
    pages: { min: null, max: null },
    genre: 'any',
    title: 'any'
  })

  useEffect(() => {
    if (availableBooks && availableBooks.length <= 0) {
      setAvailableBooks(parseredBooks)
    }

    const uniqueGenres = allGenres.filter((genre, index, self) => self.indexOf(genre) === index)
    setGenres(uniqueGenres)

    const uniquePages = allPages.filter((page, index, self) => self.indexOf(page) === index).sort((a, b) => a - b)
    setPages({
      pages: uniquePages,
      max: Math.max(...uniquePages),
      min: Math.min(...uniquePages)
    })
    setBooksFilter({
      ...booksFilter,
      pages: { min: Math.min(...uniquePages), max: Math.max(...uniquePages) }
    })
  }, [])

  const filterAvailableBooks = (books) => {
    return books.filter(book => {
      return (
        (book.pages >= booksFilter.pages.min && book.pages <= booksFilter.pages.max) &&
         (book.genre === booksFilter.genre || booksFilter.genre === 'any') &&
          (book.title.toLowerCase().startsWith(booksFilter.title.toLowerCase()) || booksFilter.title === 'any')
      )
    })
  }

  const filteredBooks = filterAvailableBooks(availableBooks)

  return {
    books: {
      availableBooks: filteredBooks,
      setBooks: setAvailableBooks,
      pages,
      genres
    },
    booksFilter: {
      booksFilter,
      setBooksFilter
    }
  }
}
