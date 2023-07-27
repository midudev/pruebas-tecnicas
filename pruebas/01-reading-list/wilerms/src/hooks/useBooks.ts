import { getBooks } from '@services/books'
import { useBooksContext } from 'contexts/books'
import { useState } from 'react'
import { type Book } from 'types'

const initialBooks = getBooks()

export const useBooks = () => {
  const { favoriteBooks, deleteFavoriteBook, addFavoriteBook } = useBooksContext()

  const books = initialBooks.map((book) => {
    return {
      ...book,
      isFavorite: favoriteBooks.includes(book.ISBN)
    }
  })

  const _favoriteBooks = favoriteBooks
    .map((ISBN) => books.find(book => book.ISBN === ISBN))
    .filter(Boolean) as Book[] // TS está loco, he tenido que trampearlo XD

  return {
    books,
    favoriteBooks: _favoriteBooks,
    deleteFavoriteBook,
    addFavoriteBook
  }
}
