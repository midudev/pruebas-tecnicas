import json from '../../../books.json'

export function serializedBooks () {
  const { library } = json
  const books = library.map(({ book }) => {
    const { title, pages, genre, cover, synopsis, year, author, ISBN } = book
    return { title, pages, genre, cover, synopsis, year, author, ISBN }
  })
  return books
}
