import { json } from '@sveltejs/kit'
import books from '$lib/data/books.json'
import type { Library } from '$lib/types/book.js'

export async function GET<RequestHandler>({ request }) {
  const url = new URL(request?.url)
  const search = new URLSearchParams(url.search)
  const filters = Object.fromEntries(search)

  let listOfBooks = [...books.library]

  if (filters?.q) {
    // console.log(filters)
    const text = filters.q.toLocaleLowerCase()
    listOfBooks = listOfBooks.filter(({ book }) => book.title.toLocaleLowerCase().includes(text))
  }

  if (filters?.maxPages) {
    listOfBooks = listOfBooks.filter(
      ({ book }) =>
        book.pages >= Number(filters?.minPages ?? 0) &&
        book.pages <= Number(filters?.maxPages ?? 1000)
    )
  }

  if (filters?.genre) {
    listOfBooks = listOfBooks.filter(({ book }) => book.genre === filters.genre)
  }

  return json({
    data: listOfBooks
  })
}
