import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Header } from '@/components/Header'
import { Tabs } from '@/components/Tabs'
import BookList from '@/components/BookList/BookList'
import { books } from '@/const/books'
import { BooksFilters } from '@/components/BooksFilters/BooksFilters'
import '@/styles/App.css'

function App() {
  const filters = books.reduce(
    (result, curr) => {
      const book = curr

      result.genres.push(book.genre)
      book.pages > result.pages.max
        ? (result.pages.max = book.pages)
        : (result.pages.min = book.pages)
      return result
    },
    { genres: [], pages: { min: +Infinity, max: -Infinity } }
  )
  filters.genres = ['Todos', ...new Set(filters.genres)]

  const [availableBooks, setAvailableBooks] = useLocalStorage('availableBooks', books)
  const [readingList, setReadingList] = useLocalStorage('readingList', [])
  const [genre, setGenre] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [maxPagesNumber, setMaxPagesNumber] = useState(filters.pages.max)
  const [debouncedMaxPagesNumber, setDebouncedMaxPagesNumber] = useState(
    filters.pages.max
  )

  // useEffect(() => {
  //   //
  // }, [])

  const removeBook = (isbn, list) => {
    let bookIndex = null
    const filteredList = list.filter((el, index) => {
      if (el.ISBN === isbn) {
        bookIndex = index
        return false
      }
      return true
    })
    return [bookIndex, filteredList]
  }

  const handleAddToReadingList = (book) => {
    const [bookIndex, filteredList] = removeBook(book.ISBN, availableBooks)
    setAvailableBooks(filteredList)
    setReadingList([availableBooks[bookIndex], ...readingList])
  }

  const handleRemoveFromReadingList = (book) => {
    const [bookIndex, filteredList] = removeBook(book.ISBN, readingList)
    setReadingList(filteredList)
    setAvailableBooks([readingList[bookIndex], ...availableBooks])
  }

  function filterBooks(booksArray) {
    const filteredList = booksArray.filter((book) => {
      const matchesSearchTerm = new RegExp(debouncedSearchTerm, 'i').test(book.title)
      const matchesGenre = genre ? book.genre === genre : true
      const matchesPageRange = book.pages <= debouncedMaxPagesNumber
      return matchesGenre && matchesPageRange && matchesSearchTerm
    })

    return filteredList
  }

  const handleSearchChange = (value) => setSearchTerm(value)

  const handleFilterPages = (value) => setMaxPagesNumber(value)

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 500)
    return () => clearTimeout(delayInputTimeoutId)
  }, [searchTerm, 500])

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedMaxPagesNumber(maxPagesNumber)
    }, 500)
    return () => clearTimeout(delayInputTimeoutId)
  }, [maxPagesNumber, 500])

  const handleGenreChange = (e) => {
    const selectedOption = e.target.value === 'Todos' ? '' : e.target.value
    setGenre(selectedOption)
  }

  const tabsData = [
    {
      name: `Libros disponibles`,
      content: (
        <BookList
          booksArray={filterBooks(availableBooks)}
          onBookButtonClick={handleAddToReadingList}
        />
      ),
    },
    {
      name: `Lista de lectura (${readingList.length})`,
      content: (
        <BookList
          readingList
          booksArray={filterBooks(readingList)}
          onBookButtonClick={handleRemoveFromReadingList}
        />
      ),
    },
  ]

  return (
    <section className='container'>
      <Header />
      <BooksFilters
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
        onFilterPages={handleFilterPages}
        genres={filters.genres}
        pages={filters.pages}
      />
      <Tabs data={tabsData} />
    </section>
  )
}

export default App
