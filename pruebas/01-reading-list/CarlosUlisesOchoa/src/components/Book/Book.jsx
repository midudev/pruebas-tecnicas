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
      <img
        className='book__image'
        src={data.cover}
        alt={`Imagen de la portada del libro: ${data.title}`}
      />
      <button className='book__options' onClick={handleAddBookToReadingListClick}>
        <span className='book__options-icon'>
          <AddSquareIcon />
        </span>
        <span className='book__options-text'>Añadir a la lista de lectura</span>
      </button>
    </article>
  )
}

export default Book
