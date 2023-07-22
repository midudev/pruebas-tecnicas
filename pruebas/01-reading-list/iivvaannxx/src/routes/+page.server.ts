import type { Library } from '$app/types'

export async function load ({ fetch }) {

  const bookData = await (await fetch('/data/books.json')).json() as Library
  const library = bookData.library.map(current => current.book)

  return { library }
}
