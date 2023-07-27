import { useEffect, useState } from 'react'
import { Book, Library } from '../interfaces/Book'
import CardBook from './CardBook'
import FilterByGenre from './FilterByGenre'
import FilterByPages from './FilterByPages'

interface BooksProps {
  bookList: Library | undefined
  titleSection: string
  addToReadingList?: (book: Book) => void
}

const Books = ({ bookList, titleSection, addToReadingList }: BooksProps) => {
  const [selectedGenre, setSelectedGenre] = useState('')
  const [filteredBookList, setFilteredBookList] = useState<Library | undefined>(
    undefined
  )

  useEffect(() => {
    if (!bookList?.library) {
      return
    }

    if (selectedGenre === '') {
      setFilteredBookList(bookList)
    } else {
      const filteredBooks = bookList.library.filter(
        book => book.book.genre === selectedGenre
      )
      setFilteredBookList({ library: filteredBooks })
    }
  }, [bookList, selectedGenre])

  if (!bookList?.library) {
    return null
  }

  return (
    <section className='pt-4'>
      <div className='navbar grid grid-cols-3'>
        <div className='flex-1 col-span-1'>
          <div className='indicator'>
            <span className='indicator-item indicator-top indicator-end badge bg-orange-300 text-slate-700 text-xs font-semibold'>
              {bookList.library.length}
            </span>
            <p className='btn btn-ghost btn-sm pb-1 font-serif text-center font-semibold text-lg text-gray-600 pl-3 capitalize hover:bg-transparent'>
              {titleSection}
            </p>
          </div>
        </div>
        {/* FILTER BY GENRE AND PAGES COMPONENT */}
        <div className='flex-none gap-4 col-span-2 justify-around'>
          <FilterByGenre
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            bookList={bookList}
            setFilteredBookList={setFilteredBookList}
            genreCounts={
              filteredBookList?.library.length ?? bookList.library.length
            }
          />
          <FilterByPages
            bookList={bookList}
            setFilteredBookList={setFilteredBookList}
          />
        </div>
        {/* END FILTER BY GENRE AND PAGES COMPONENT */}
      </div>
      {/* CARD BOOK COMPONENT */}
      <div className='grid grid-cols-3 gap-4 p-8 rounded-lg overflow-y-auto max-h-80'>
        {(filteredBookList?.library.length != undefined &&
          filteredBookList?.library.length > 0) ||
        bookList.library.length > 0 ? (
          (filteredBookList?.library ?? bookList.library).map(item => (
            <li
              className='flex items-center justify-center'
              key={item.book.ISBN}
            >
              <CardBook
                book={item.book}
                fromComponent='Books'
                addToReadingList={addToReadingList}
              />
            </li>
          ))
        ) : (
          <p className='text-center text-gray-600 font-light text-md col-span-3'>
            No <b>books</b> in your <b>library</b>..
          </p>
        )}
      </div>
      {/* END CARD BOOK COMPONENT */}
    </section>
  )
}

export default Books
