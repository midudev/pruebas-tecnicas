import type { Book, Library } from '@/models/response-books.model'

export type ResponseBooksAdapter = ReturnType<typeof responseBooksAdapter>

export const responseBooksAdapter = (library: Library[]) => {
  const genres = new Set<string>()

  const books = library.map<Book>(({ book }) => {
    const { title, pages, genre, cover, synopsis, year, ISBN, author } = book

    genres.add(genre)

    return {
      title,
      pages,
      genre,
      cover,
      synopsis,
      year,
      ISBN,
      author: {
        name: author.name,
        otherBooks: author.otherBooks,
      },
    }
  })

  return {
    genres: Array.from(genres),
    books,
  }
}
