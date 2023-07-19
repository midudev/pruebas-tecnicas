import useBooksStore from '../hooks/useBooksStore'
import '../css/ReadingList.css'
import ReadingBookCard from './ReadingBookCard'

const ReadingList = () => {
  const { readingList, countBookToRead } = useBooksStore()

  return (
    <aside className='h-screen reading-list-container'>
      <h2 className='heading'>Lista de lectura</h2>
      <span>{countBookToRead}</span>
      {
        readingList?.map(book => {
          return (
            <ReadingBookCard book={book} />
          )
        })
      }
    </aside>
  )
}

export default ReadingList