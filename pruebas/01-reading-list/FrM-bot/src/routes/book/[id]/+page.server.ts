import JsonBooks from '$lib/data/books.json'
import { APIPaths } from '$lib/services/urls.js'
import type { Library } from '$lib/types/book.js'

export const load = async ({ fetch, params }) => {
  const { id } = params
  const response = await fetch(APIPaths.get.book(id))
  const { data }: { data: Library } = await response.json()

  return {
    book: data.book
  }
}
