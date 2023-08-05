import { useEffect, useState } from 'react'
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
  const [maxNumberOfPagesValue, setMaxNumberOfPagesValue] = useState(2)

  useEffect(() => {
    // get all the genres without duplicates
    const genresArray = [...new Set(booksArray.map((book) => book.genre))]
    // get the maximum number of pages
    const maxPages = Math.max(...booksArray.map((book) => book.pages))
    console.log(maxPages) // tetemp
    setMaxPagesFilter([maxPages])
    setMaxNumberOfPagesValue(maxPages)
    setGenres(genresArray)
  }, [booksArray])

  useEffect(() => {
    const availableBooksArray = booksArray.filter((book) => {
      const notInReadingList = !readingListBooksArray.find(
        (readingBook) => readingBook.ISBN === book.ISBN
      )
      const matchesGenre = genreFilter ? book.genre === genreFilter : true
      const matchesPageRange = book.pages <= maxPagesFilter[0] // condition to filter by page range
      return notInReadingList && matchesGenre && matchesPageRange
    })
    setAvailableBooks(availableBooksArray)
    console.log(genreFilter) // tetemp
    console.log(maxPagesFilter) // tetemp
  }, [readingListBooksArray, genreFilter, maxPagesFilter])

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
          <span className='mr-2'>Filter by pages range</span>
          <Range
            min={1}
            max={maxNumberOfPagesValue}
            step={1}
            values={maxPagesFilter}
            onChange={(values) => setMaxPagesFilter(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
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
                  height: '42px',
                  width: '42px',
                  backgroundColor: '#999',
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
