import '@/components/Book/Book.css'
import AddSquareIcon from '@/components/Icons/AddSquareIcon'

const Book = ({ data }) => {
  return (
    <div className='grid-item'>
      <div className='item-inner'>
        <div className='book'>
          <img className='book__image' src={data.cover} alt={`Cover of ${data.title}`} />
          <div className='book__content'>
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
