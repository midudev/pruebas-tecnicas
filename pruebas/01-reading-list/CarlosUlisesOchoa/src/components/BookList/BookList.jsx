import { useEffect, useState, useRef } from 'react'
import { Range } from 'react-range'
import Book from '@/components/Book/Book'
import '@/components/BookList/BookList.css'
import { useReadingListStore } from '@/store/useReadingListStore'
import { useBooksStore } from '@/store/useBooksStore'

const BookList = ({ onAddBookToReadingListClick }) => {
  useEffect(() => console.log('[R]-------> BookList component rendered!'), []) // tetemp

  const booksArray = useBooksStore((state) => state.books)
  const readingListBooksArray = useReadingListStore((state) => state.readingList)
  const [availableBooks, setAvailableBooks] = useState([])
  const [genres, setGenres] = useState([]) // ['Fantasy', 'Horror', 'Science Fiction', etc...
  const [genreFilter, setGenreFilter] = useState('')
  const [maxPagesFilter, setMaxPagesFilter] = useState([1]) // maximum page filter
  const [debouncedMaxPagesFilter, setDebouncedMaxPagesFilter] = useState([1])
  const [maxNumberOfPagesValue, setMaxNumberOfPagesValue] = useState(2)
  const firstRender = useRef(true)

  useEffect(() => {
    // get all the genres without duplicates
    const genresArray = [...new Set(booksArray.map((book) => book.genre))]
    // get the maximum number of pages
    const maxPages = Math.max(...booksArray.map((book) => book.pages))
    // console.log(maxPages) // tetemp
    setMaxNumberOfPagesValue(maxPages)
    // Only set maxPagesFilter on the first render
    if (firstRender.current) {
      setMaxPagesFilter([maxPages])
      firstRender.current = false
    }
    if (maxPagesFilter[0] > maxPages) {
      setMaxPagesFilter([maxPages])
    }
    setGenres(genresArray)
  }, [booksArray])

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedMaxPagesFilter(maxPagesFilter)
      // console.log(debouncedMaxPagesFilter) // tetemp
    }, 500)
    return () => clearTimeout(delayInputTimeoutId)
  }, [maxPagesFilter, 500])

  useEffect(() => {
    const availableBooksArray = booksArray.filter((book) => {
      const notInReadingList = !readingListBooksArray.find(
        (readingBook) => readingBook.ISBN === book.ISBN
      )
      const matchesGenre = genreFilter ? book.genre === genreFilter : true
      const matchesPageRange = book.pages <= debouncedMaxPagesFilter[0] // condition to filter by page range
      return notInReadingList && matchesGenre && matchesPageRange
    })
    setAvailableBooks(availableBooksArray)
    // console.log(genreFilter) // tetemp
    // console.log(debouncedMaxPagesFilter) // tetemp
  }, [readingListBooksArray, genreFilter, debouncedMaxPagesFilter])

  function handleMaxPagesFilterChange(e) {
    setMaxPagesFilter(e)
  }

  return (
    <>
      <section className='books__filters'>
        <div className='books__filters__genre'>
          <span className='mr-2'>Filter by genre</span>
          <select
            className='books__filter'
            onChange={(e) => setGenreFilter(e.target.value)}>
            <option value=''>All</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className='books__filters__pages'>
          {/* input field for page range filter */}
          <span className='mr-2'>Filter by pages range (1 - {maxPagesFilter})</span>
          <Range
            min={1}
            max={maxNumberOfPagesValue}
            step={1}
            values={maxPagesFilter}
            onChange={handleMaxPagesFilterChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '3px',
                  width: '30%',
                  backgroundColor: '#ccc',
                }}>
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '21px',
                  width: '21px',
                  backgroundColor: '#fff',
                }}
              />
            )}
          />
        </div>
      </section>
      <ul className='books__container'>
        {availableBooks.map((book) => (
          <li className='books__element' key={book.ISBN}>
            <Book
              data={book}
              onAddBookToReadingListClick={() => onAddBookToReadingListClick(book)}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default BookList
