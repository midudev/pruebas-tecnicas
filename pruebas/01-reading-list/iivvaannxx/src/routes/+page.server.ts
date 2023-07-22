import type { Library } from '$app/types'

export async function load ({ fetch }) {

  const bookData = await fetch('/data/books.json')
  const data = await bookData.json()

  return { library: data.library as Library }
}
