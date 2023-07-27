import { json } from '@sveltejs/kit'
import books from '$lib/data/books.json'
import type { RequestHandler } from './$types'

export async function GET<RequestHandler>({ params }) {
  //   const url = new URL(request?.url)
  //   const search = new URLSearchParams(url.search)
  //   const params = Object.fromEntries(search)

  console.log({
    params
  })

  const { id } = params

  const book = books.library.find(({ book }) => book.ISBN === id)

  return json({
    data: book
  })
}
