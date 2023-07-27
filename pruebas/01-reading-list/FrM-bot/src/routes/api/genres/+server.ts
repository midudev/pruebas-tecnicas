import { json } from '@sveltejs/kit'
import books from '$lib/data/books.json'

export async function GET() {
  let listOfBooks = [...books.library]
  const genres = [...new Set(listOfBooks.map(({ book }) => book.genre))]

  return json({
    data: genres
  })
}
