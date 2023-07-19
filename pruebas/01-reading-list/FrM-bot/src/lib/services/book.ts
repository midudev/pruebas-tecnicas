import type { Library } from '$lib/types/book'
import { APIPaths } from './urls'

interface Props {
  id: string
}

export async function getBook({ id }: Props) {
  try {
    const res = await fetch(APIPaths.get.book(id))
    if (!res.ok) {
        throw Error('Fetch error')
    }
    const { data }: { data: Library } = await res.json()
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
