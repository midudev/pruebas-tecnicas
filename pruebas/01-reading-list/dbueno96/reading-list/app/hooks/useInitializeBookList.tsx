'use client'
import { useBookStore } from '../store/bookStore'
import Books from '../../books.json'
import React from 'react'
import BookList from '../components/BookList/indext'

export const useInitializeBookList = () => {
  const { initializeBooklist, bookList } = useBookStore()
  const books:ILibrary['books'] = React.useMemo(() => (((Books as any).library as any).map(({ book }:any) => ({ ...book }))), [])

  React.useEffect(() => {
    initializeBooklist(books)
  }, [books, initializeBooklist])

  React.useEffect(() => { console.log({ bookList }) })
}
