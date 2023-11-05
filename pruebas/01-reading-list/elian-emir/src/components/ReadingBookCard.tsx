import useBooksStore from '../hooks/useBooksStore'
import '../css/BookCard.css'
import { IBook } from '../types'

interface Props {
  book:IBook
}
const ReadingBookCard = ({ book }: Props) => {
  const { removeBookOfList } = useBooksStore()
  return (
    <div className='card_reading flex gap-2r mt-1r'>
      <img src={book.cover} alt={book.title} width={100}/>
      <div className='card_reading-content'>
        <div>
          <h4>{book.title}</h4>
          <p>{book.author.name}</p>
        </div>
        <button className='btn' onClick={() => removeBookOfList(book.ISBN)}>Quitar de lista</button>
      </div>
    </div>
    
  )
}

export default ReadingBookCard