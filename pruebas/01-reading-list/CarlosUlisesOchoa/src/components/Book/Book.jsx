import { useEffect, useState } from 'react'
import '@/components/Book/Book.css'
import AddSquareIcon from '@/components/Icons/AddSquareIcon'
import RemoveSquareIcon from '../Icons/RemoveSquareIcon'

const Book = ({
  data,
  isOnReadingList = false,
  onBookButtonClick,
  fadingOut = false,
}) => {
  // useEffect(() => console.log(`[R]-------> Book '${data.title}' rendered!`), []) // tetemp

  const [isFadingOut, setIsFadingOut] = useState(fadingOut)

  const fadeOut = (cb) => {
    setIsFadingOut(true)
    cb()
  }

  const handleBookButtonClick = () => {
    fadeOut(() => {
      setTimeout(() => {
        onBookButtonClick()
        setIsFadingOut(false)
      }, 300)
    })
  }

  return (
    <article className={`book ${isFadingOut ? 'book--fading-out' : ''}`}>
      <div className='book__cover'>
        <img
          className='book__cover-img'
          src={data.cover}
          alt={`Imagen de la portada del libro: ${data.title}`}
        />
        <div className='book__options'>
          <button
            className='book__options-button--add-to-reading-list'
            onClick={handleBookButtonClick}>
            <span className='book__options-icon--add-to-reading-list'>
              {isOnReadingList ? <RemoveSquareIcon /> : <AddSquareIcon />}
            </span>
            <span className='book__options-text--add-to-reading-list'>
              {isOnReadingList
                ? 'Remover de la lista de lectura'
                : 'Añadir a la lista de lectura'}
            </span>
          </button>
        </div>
      </div>
      <div className='book__details'>
        <h2 className='book__details-title text-gray-700 dark:text-white dark:text-opacity-90'>
          {data.title}
        </h2>
        <p className='book__details-author text-gray-600'>{data.author.name}</p>
        <div className='book__details-meta text-gray-500'>
          <span className='book__details-genre'>{data.genre}</span>
          <span className='book__details-pages'>{data.pages} pág.</span>
        </div>
      </div>
    </article>
  )
}

export default Book
