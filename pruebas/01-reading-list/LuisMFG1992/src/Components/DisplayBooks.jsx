import { useDispatch } from 'react-redux'
import { addBookToReadingList } from '../redux/booksSlice'

const DisplayBooks = ({ booksList, selectedFilters }) => {
  const dispatch = useDispatch()
  function filterBooksByGenre(books, genres) {
    return books.filter((libro) =>
      genres.some((element) => element === libro.book.genre)
    )
  }

  const filterBooks = filterBooksByGenre(booksList, selectedFilters)

  return (
    <div className="flex flex-wrap  gap-4 p-4 justify-center items-center">
      {(selectedFilters.length === 0 ? booksList : filterBooks).map(
        (element) => (
          <img
            key={element.book.ISBN}
            src={element.book.cover}
            className="w-[200px] h-[300px] "
            onClick={() => dispatch(addBookToReadingList(element))}
          />
        )
      )}
    </div>
  )
}

export default DisplayBooks
