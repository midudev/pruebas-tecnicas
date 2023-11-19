import React from 'react'
import './Book.css'

const Book = ({ data }) => {
  return (
    <li className='book' >
      <img src={data.book.cover} alt=" " />
    </li>
  )
}

export default Book
