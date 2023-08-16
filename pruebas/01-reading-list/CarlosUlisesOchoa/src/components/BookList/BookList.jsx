import Book from '@/components/Book/Book'
import '@/components/BookList/BookList.css'

const BookList = ({ booksArray, onAddBookToReadingListClick }) => {
  // useEffect(() => console.log('[R]-------> BookList component rendered!'), []) // tetemp

  return (
    <>
      {booksArray.length === 0 && (
        <p>No se han encontrado libros que coincidan con tus criterios de búsqueda.</p>
      )}
      {booksArray.length > 0 && (
        <ul className='books__container'>
          {booksArray.map((book) => (
            <li className='books__element' key={book.ISBN}>
              <Book
                data={book}
                onAddBookToReadingListClick={() => onAddBookToReadingListClick(book)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default BookList
