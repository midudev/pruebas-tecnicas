import { json } from '@sveltejs/kit'
import books from '$lib/data/books.json'
import type { RequestHandler } from './$types'

export async function GET<RequestHandler>({ request }) {
  const url = new URL(request?.url)
  const search = new URLSearchParams(url.search)
  const filters = Object.fromEntries(search)

  let listOfBooks = [...books.library]

  if (filters.maxPages || filters.minPages) {
    listOfBooks = listOfBooks.filter(
      ({ book }) => book.pages >= Number(filters.minPages || 0) && book.pages <= Number(filters.maxPages)
    )
  }

  if (filters?.genre) {
    listOfBooks = listOfBooks.filter(({ book }) => book.genre === filters.genre)
  }

  return json({
    data: listOfBooks
  })
}
