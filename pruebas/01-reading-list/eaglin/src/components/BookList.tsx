import React from 'react'
import { type LibraryElement } from '../types'
import './bookList.css'
interface BookListProps {
  library: LibraryElement[]
  addElement: (ISBN: string) => void
  style?: React.CSSProperties
  imgHeight?: number
  imgWidth?: number
  applySelected?: boolean
}

const BookList: React.FC<BookListProps> = ({ library, addElement, style, imgHeight = 250, imgWidth = 200, applySelected = true }) => {
  return (
    <div style={style}>
 {library.map(library => {
   return <div key={library.book.ISBN} className={applySelected && library.toRead != null && library?.toRead ? 'selected' : ''}>
    <img style={{ backgroundColor: 'red' }} onClick={() => { addElement(library.book.ISBN) }} width={imgWidth} height={imgHeight}
    src={library.book.cover}></img></div>
 })}
    </div>
  )
}

export default BookList
