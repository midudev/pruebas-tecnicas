import { API_URL } from './constants'

export async function getBooks () {
  const res = await fetch(API_URL)
  const { library } = await res.json()

  return library
}
