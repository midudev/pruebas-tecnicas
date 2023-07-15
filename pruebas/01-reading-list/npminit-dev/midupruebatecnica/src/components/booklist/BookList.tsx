import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import Book from './Book'

export default function BookList(): JSX.Element {

  const { bookList, readList } = useContext(GlobalContext)

  return (
    <section>
      {
        bookList && readList &&
        bookList.map((book, i) => 
          readList.some(interest => interest.title === book.title && interest.author === book.author.name)
            ? <Book bookData={book} selectable={false} key={i}></Book>
            : <Book bookData={book} selectable={true} key={i}></Book>
          )
      }
    </section>
  )
}