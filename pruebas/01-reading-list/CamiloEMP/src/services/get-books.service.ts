import type { ResponseBooksAdapter } from '@/adapters/response-books.adapter'

import { responseBooksAdapter } from '@/adapters/response-books.adapter'

import books_mock from '../../../books.json'

interface GetBooksProps {
  numPages: number
  genre: string[]
  search: string
}

export async function getBooks({ genre = [], numPages = 0, search = '' }: GetBooksProps) {
  return new Promise<ResponseBooksAdapter | undefined>(resolve => {
    setTimeout(() => {
      if (genre.length === 0 && numPages === 0) {
        const books = responseBooksAdapter(books_mock.library)

        resolve(books)
      }

      const filteredBooks = books_mock.library.filter(
        ({ book }) =>
          genre.includes(book.genre) || numPages === book.pages || book.title.includes(search),
      )

      const responseAdapted = responseBooksAdapter(filteredBooks)

      resolve(responseAdapted)
    }, 500)
  })
}
