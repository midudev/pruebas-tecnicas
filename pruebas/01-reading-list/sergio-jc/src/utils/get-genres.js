import json from '../../../books.json'

export function getGenres () {
  const { library } = json
  const allGenres = library.map(({ book }) => book.genre)
  return [...new Set(allGenres)]
}
