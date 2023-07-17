export const searchBooks = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL)

  const json = await res.json()

  const library = json.library

  return library?.map(item => {
    const book = item.book
    return ({
      title: book.title,
      pages: book.pages,
      genre: book.genre,
      cover: book.cover,
      synopsis: book.cover,
      year: book.year,
      isbn: book.ISBN,
      author: book.author

    })
  })
}
