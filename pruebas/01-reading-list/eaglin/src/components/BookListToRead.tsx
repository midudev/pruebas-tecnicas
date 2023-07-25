import React from 'react'
import { type LibraryElement } from '../types'
import './bookList.css'
import { CloseIcon } from './Icons'
interface BookListProps {
  library: LibraryElement[]
  addElement: (ISBN: string) => void
  style?: React.CSSProperties
  imgHeight?: number
  imgWidth?: number
}

const BookListToRead: React.FC<BookListProps> = ({ library, addElement, imgHeight = 150, imgWidth = 125 }) => {
  return (

    <section role='books-to-read' >
      <header><h1>Lista de lectura</h1></header>
      <main>
      <div className='container' >
 {library?.map(library => {
   return <div key={library.book.ISBN} style={{ position: 'relative' }}>
      <button onClick={() => { addElement(library.book.ISBN) }} style={{ objectFit: 'contain', flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, background: 'red', backgroundColor: 'white' }}>
      <CloseIcon/>
      </button>

    <img style={{ padding: 10 }} width={imgWidth} height={imgHeight}
    src={library.book.cover}></img></div>
 })}
    </div>
    </main>
    </section>
  )
}

export default BookListToRead
