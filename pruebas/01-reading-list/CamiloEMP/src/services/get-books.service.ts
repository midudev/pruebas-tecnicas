import type { ResponseBooksAdapter } from '@/adapters/response-books.adapter'

import { responseBooksAdapter } from '@/adapters/response-books.adapter'

import books_mock from '../../../books.json'

export async function getBooks() {
  return new Promise<ResponseBooksAdapter | undefined>(resolve => {
    setTimeout(() => {
      const responseAdapted = responseBooksAdapter(books_mock)

      resolve(responseAdapted)
    }, 500)
  })
}
