export function getGenresFromBooks(books) {
  const genresSet = books.reduce((accum, book) => {
    book?.volumeInfo?.categories?.forEach((category) => {
      accum.add(category)
    })
    return accum
  }, new Set())

  const genres = [...genresSet]

  return genres
}
