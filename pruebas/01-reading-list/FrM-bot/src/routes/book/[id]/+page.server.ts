import { error } from '@sveltejs/kit'
import { APIPaths } from '$lib/services/urls.js'
import type { Library } from '$lib/types/book.js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { id } = params
  const response = await fetch(APIPaths.get.book(id))
  const { data }: { data: Library } = await response.json()

  if (!data) {
    throw error(404, {
      message: 'Not found',
      code: 'NOT_FOUND'
    })
  }

  return {
    book: data.book
  }
}
