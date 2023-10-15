import React from 'react'

export default function Book({book, children}) {
  return (
    <div className='flex flex-col items-center'>
      <img src={book.cover} alt={book.title} className='w-36' />
      {children}
    </div>
  )
}
