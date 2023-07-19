import { useState, useEffect } from 'react'
import '../css/Book.css'
import { IBook } from '../types'
import useBooksStore from '../hooks/useBooksStore'

interface Props {
  book: IBook
}

const Book = ({ book }: Props) => {
  const [isInReadingList, setIsInReadingList] = useState<boolean>(false)
  const { addBooksToReadingList, readingList } = useBooksStore()
  useEffect(() => {
    const findBook = readingList.find(b => b.ISBN === book.ISBN)
    if (findBook) {
      setIsInReadingList(true)
    } else {
      setIsInReadingList(false)
    }
  }, [readingList])
  
  return (
    <div className='book_content mt-2r' >
      <h3 className='heading'>{book.title}</h3>
      <img src={book.cover} alt={`Tapa de libro ${book.title}`} width={300} loading='lazy' />
      {
        isInReadingList ? <p>Ya se encuentra en su lista</p> :
        (<button className='btn' onClick={()=> addBooksToReadingList(book.ISBN)}>Agregar a lista de lectura</button>)
      }
    </div>
  )
}

export default Book