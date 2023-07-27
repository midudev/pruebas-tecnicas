import type { Library } from '$lib/types/book'
import { APIPaths, baseUrl } from './urls'

interface Props {
  queries: {
    minPages?: number
    maxPages?: number
    genre?: string
    q?: string
  }
}

export async function getBooks({ queries }: Props) {
  const url = new URL(baseUrl + APIPaths.get.books)
  const params = new URLSearchParams(url.search)

  Object.entries(queries).forEach(([key, value]) => {
    if (value) {
      params.append(key, String(value))
    }
  })

  url.search = params.toString()
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('Fetch error')
    }
    const { data }: { data: Library[] } = await res.json()
    return {
      books: data
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Fetch error.'
    }
  }
}
