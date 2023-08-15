import { useEffect, useState } from 'react'
import TrashIcon from '@/components/Icons/TrashIcon'
import './ReadingList.css'
import { useReadingListStore } from '@/store/useReadingListStore'
const ReadingList = () => {
  // useEffect(() => console.log('[R]-------> ReadingList component rendered!'), []) // tetemp
  const removeBookFromReadingList = useReadingListStore(
    (state) => state.removeBookFromReadingList
  )
  const [readingListState, setReadingListState] = useState([])
  const readingList = useReadingListStore((state) => state.readingList)
  useEffect(() => {
    setReadingListState(readingList)
  }, [readingList])
  return (
    <section className='reading__list'>
      <div className='card'>
        <div className='card__header'>
          <h5 className='card__title'>Mi lista de lectura</h5>
        </div>
        {readingListState && readingListState.length > 0 ? (
          <div className='card__content'>
            <ul role='list' className='list'>
              {readingListState.map((book) => (
                <li key={book.ISBN} className='list__item'>
                  <div className='item__content'>
                    <div className='item__image-container'>
                      <img
                        className='item__image'
                        src={book.cover}
                        alt={`Portada del libro ${book.title}`}
                      />
                    </div>
                    <div className='item__detail'>
                      <p className='item__title'>{book.title}</p>
                      <p className='item__author'>{book.author.name}</p>
                    </div>
                    <div
                      className='item__remove-button'
                      onClick={() => removeBookFromReadingList(book)}>
                      <TrashIcon />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className='card__content'>
            <p className='card__text'>No hay libros en la lista de lectura.</p>
          </div>
        )}
      </div>
    </section>
  )
}
export default ReadingList
