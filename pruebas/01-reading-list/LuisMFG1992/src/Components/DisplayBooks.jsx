import { useDispatch } from 'react-redux'
import { addRemoveBookReadingList } from '../redux/booksSlice'

import { AiFillStar } from 'react-icons/ai'

const DisplayBooks = ({ booksList, selectedFilters, readingList }) => {
  const dispatch = useDispatch()
  function filterBooksByGenre(books, genres) {
    return books.filter((libro) =>
      genres.some((element) => element === libro.book.genre)
    )
  }

  const addBook = (book) => {
    dispatch(addRemoveBookReadingList(book))
  }

  const filterBooks = filterBooksByGenre(booksList, selectedFilters)

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {(selectedFilters.length === 0 ? booksList : filterBooks).map(
        (element) => (
          <button
            key={element.book.ISBN}
            className="relative transition-transform active:scale-110"
          >
            <img
              src={element.book.cover}
              className="w-[200px] h-[300px]"
              onClick={() => {
                addBook(element)
              }}
            ></img>

            {readingList.some(
              (book) => book.book.ISBN === element.book.ISBN
            ) && (
              <AiFillStar
                className="absolute top-2 right-2 text-purple-600 bg-white rounded-full border border-purple-500"
                size={'2rem'}
              />
            )}
          </button>
        )
      )}
    </div>
  )
}

export default DisplayBooks
