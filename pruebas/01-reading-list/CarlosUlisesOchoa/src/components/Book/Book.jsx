import { useState } from 'react'
import '@/components/Book/Book.css'
import AddSquareIcon from '@/components/Icons/AddSquareIcon'

const Book = ({ data, onAddBookToReadingListClick, fadingOut = false }) => {
  const [isFadingOut, setIsFadingOut] = useState(fadingOut)

  const fadeOut = (cb) => {
    setIsFadingOut(true)
    cb()
  }

  const handleAddBookToReadingListClick = () => {
    fadeOut(() => {
      setTimeout(() => {
        onAddBookToReadingListClick()
        setIsFadingOut(false)
      }, 300)
    })
  }

  return (
    <article className={`grid__item book ${isFadingOut ? 'fading-out' : ''}`}>
      <div className='grid__item-inner'>
        <figure>
          <img
            className='book__image'
            src={data.cover}
            alt={`Imagen de la portada del libro: ${data.title}`}
          />
          <figcaption>{data.title}</figcaption>
        </figure>
        <button className='book__content' onClick={handleAddBookToReadingListClick}>
          <span className='book__content-icon'>
            <AddSquareIcon />
          </span>
          <span className='book__content-text'>Añadir a la lista de lectura</span>
        </button>
      </div>
    </article>
  )
}

export default Book
