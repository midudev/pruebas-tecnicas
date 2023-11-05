import data from '../../../books.json'

export function fetchBooksData() {
  const booksRaw = data.library
  return booksRaw.map(book => {
    const { title, author, ISBN, pages, genre, cover, synopsis, year } = book.book 
    return {
      title,
      author,
      ISBN,
      pages,
      genre,
      cover,
      synopsis,
      year
    }
  })
}