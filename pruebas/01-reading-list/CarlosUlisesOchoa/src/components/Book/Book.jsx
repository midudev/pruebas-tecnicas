import { useEffect, useState } from 'react'
import '@/components/Book/Book.css'
import AddSquareIcon from '@/components/Icons/AddSquareIcon'

const Book = ({ data, onAddBookToReadingListClick, fadingOut = false }) => {
  // useEffect(() => console.log(`[R]-------> Book '${data.title}' rendered!`), []) // tetemp

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
            onClick={handleAddBookToReadingListClick}>
            <span className='book__options-icon--add-to-reading-list'>
              <AddSquareIcon />
            </span>
            <span className='book__options-text--add-to-reading-list'>
              Añadir a la lista de lectura
            </span>
          </button>
        </div>
      </div>
      <div className='book__details'>
        <h2 className='book__details-title'>{data.title}</h2>
        <p className='book__details-author'>{data.author.name}</p>
        <div className='book__details-meta'>
          <span className='book__details-genre'>{data.genre}</span>
          <span className='book__details-pages'>{data.pages} pág.</span>
        </div>
      </div>
    </article>
  )
}

export default Book
