import { useDispatch } from 'react-redux'
import { addBookToReadingList } from '../redux/booksSlice'

import { AiFillStar } from 'react-icons/ai'

const DisplayBooks = ({ booksList, selectedFilters, readingList }) => {
  const dispatch = useDispatch()
  function filterBooksByGenre(books, genres) {
    return books.filter((libro) =>
      genres.some((element) => element === libro.book.genre)
    )
  }

  const addBook = (book) => {
    dispatch(addBookToReadingList(book))
  }

  const filterBooks = filterBooksByGenre(booksList, selectedFilters)

  return (
    <div className="flex flex-wrap  gap-4 p-4 justify-center items-center">
      {(selectedFilters.length === 0 ? booksList : filterBooks).map(
        (element) => (
          <div key={element.book.ISBN} className="relative">
            <img
              src={element.book.cover}
              className="w-[200px] h-[300px]"
              onClick={() => addBook(element)}
            ></img>

            {readingList.some(
              (book) => book.book.ISBN === element.book.ISBN
            ) && (
              <AiFillStar
                className="absolute top-2 right-2 text-purple-600 bg-white rounded-full border border-purple-500"
                size={'2rem'}
              />
            )}
          </div>
        )
      )}
    </div>
  )
}

export default DisplayBooks
