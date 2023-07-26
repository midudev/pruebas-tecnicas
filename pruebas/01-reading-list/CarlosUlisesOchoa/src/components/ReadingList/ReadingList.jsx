import { useEffect, useState } from 'react'
import TrashIcon from '@/components/Icons/TrashIcon'
import './ReadingList.css'
import { useReadingListStore } from '@/store/useReadingListStore'

const ReadingList = () => {
  const removeBookFromReadingList = useReadingListStore(
    (state) => state.removeBookFromReadingList
  )

  const [readingListState, setReadingListState] = useState([])

  const readingList = useReadingListStore((state) => state.readingList)

  useEffect(() => {
    setReadingListState(readingList)
  }, [readingList])

  return (
    <div className='reading-list-card'>
      <div className='card-container'>
        <div className='card-header'>
          <h5 className='card-title'>My Reading List</h5>
        </div>
        {readingListState && readingListState.length > 0 ? (
          <div className='card-content'>
            <ul
              role='list'
              className='list divide-y divide-gray-200 dark:divide-gray-700'>
              {readingListState.map((book) => (
                <li key={book.title} className='list-item'>
                  <div className='list-item-content'>
                    <div className='list-item-image-container'>
                      <img
                        className='list-item-image'
                        src={book.cover}
                        alt={`Portada del libro ${book.title}`}
                      />
                    </div>
                    <div className='list-item-detail'>
                      <p className='list-item-name'>{book.title}</p>
                      <p className='list-item-author'>{book.author.name}</p>
                    </div>
                    <div
                      className='list-item-remove-button'
                      onClick={() => removeBookFromReadingList(book)}>
                      <TrashIcon />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className='card-content'>
            <p className='card-text'>No hay libros en la lista de lectura.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReadingList
