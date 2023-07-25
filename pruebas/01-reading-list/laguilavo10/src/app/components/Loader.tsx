'use client'
import React, { type PropsWithChildren } from 'react'
import { useBooks } from '../context/books'

export default function Loader({ children }: PropsWithChildren) {
  const { state } = useBooks()
  return (
    <>
      {state.bookList.length === 0 && state.readingList.length === 0 ? (
        <p className='text-white'>loading</p>
      ) : (
        children
      )}
    </>
  )
}
