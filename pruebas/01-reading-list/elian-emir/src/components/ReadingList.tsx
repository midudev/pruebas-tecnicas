import useBooksStore from '../hooks/useBooksStore'
import '../css/ReadingList.css'
import ReadingBookCard from './ReadingBookCard'

const ReadingList = () => {
  const { readingList, countBookToRead } = useBooksStore()

  return (
    <aside className='reading-list-container'>
      <h3 className='heading'>Lista de lectura</h3>
      <p>
        Libros disponibles: <span>{countBookToRead}</span>
      </p>
      {readingList?.map((book) => {
        return <ReadingBookCard book={book} key={book.ISBN} />
      })}
    </aside>
  )
}

export default ReadingList
