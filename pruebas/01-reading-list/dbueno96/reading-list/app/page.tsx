'use client'
import 'tailwindcss/tailwind.css'
import BookSection from './components/BookSection'
import { BOOK_SECTION_TITLE, READING_LIST_SECTION_TITLE } from './constants.texts'
import React from 'react'
import { useInitializeBookList } from './hooks/useInitializeBookList'
import { useBookStore } from './store/bookStore'
import { useMappedBooks } from './hooks/useMappedBooks'

export default function MainPage () {
  useInitializeBookList()
  const { bookList: books, moveBookToReadingList, removeBookFromReadingList } = useBookStore()
  const readingListBooks = useMappedBooks(books)

  return (
    <main className='bg-gray-800 text-white text-4xl h-screen flex justify-between gap-0 overflow-hidden'>
      <BookSection className='flex-grow' title={BOOK_SECTION_TITLE} books={books} onClick={moveBookToReadingList} />
      <BookSection title={READING_LIST_SECTION_TITLE} books={readingListBooks} onClick={removeBookFromReadingList} />
    </main>
  )
}
