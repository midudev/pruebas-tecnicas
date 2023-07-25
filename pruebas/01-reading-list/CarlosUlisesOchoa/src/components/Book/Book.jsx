import '@/components/Book/Book.css'
import AddSquareIcon from '@/components/Icons/AddSquareIcon'

const Book = ({ data, onAddBookToReadingListClick }) => {
  return (
    <div className='grid-item'>
      <div className='item-inner'>
        <div className='book'>
          <img
            className='book__image'
            src={data.cover}
            alt={`Imagen de la portada del libro: ${data.title}`}
          />
          <div className='book__content' onClick={onAddBookToReadingListClick}>
            <span className='book__icon'>
              <AddSquareIcon />
            </span>
            <span className='book__text'>Añadir a la lista de lectura</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
