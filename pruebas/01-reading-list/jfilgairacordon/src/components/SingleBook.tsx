import './SingleBook.css'
import { type Book } from '../types'
import { Button } from './Button'
import React from 'react'

type Props = | {
  book: Book
  text: string
  onClick: (book: Book) => void
  children?: React.ReactNode
}

export function SingleBook ({ book, onClick, text, children }: Props) {
  const {
    title,
    author,
    genre,
    pages,
    cover
  } = book
  const { name: authorName } = author

  return (
    <li className="book">
      <img src={cover} alt={title} />
      <div className='book-info'>
        <h2>{title}</h2>
        <span><strong>Autor:</strong> {authorName}</span>
        <span><strong>Género:</strong> {genre}</span>
        <span>{pages} páginas</span>
        <Button
          text={text}
          onClick={() => { onClick(book) }}
          style={{
            fontSize: '0.8rem',
            width: '120px',
            alignSelf: 'flex-end',
            justifySelf: 'center'
          }}
        />
      </div>
      {children}
    </li>
  )
}
