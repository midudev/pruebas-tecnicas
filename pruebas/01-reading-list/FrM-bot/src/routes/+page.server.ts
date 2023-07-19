import JsonBooks from '$lib/data/books.json'
import { APIPaths } from '$lib/services/urls.js'

export const load = async ({ fetch }) => {
  const books = JsonBooks.library
  // const responseBooks = await fetch(APIPaths.get.genres)
  const responseGenres = await fetch(APIPaths.get.genres)
  const genres = await responseGenres.json()

  return {
    books,
    genres: genres.data
  }
}
