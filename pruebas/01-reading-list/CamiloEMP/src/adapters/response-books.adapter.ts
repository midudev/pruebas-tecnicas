import type { Book, ResponseBooks } from '@/models/response-books.model'

export type ResponseBooksAdapter = ReturnType<typeof responseBooksAdapter>

export const responseBooksAdapter = (response: ResponseBooks) => {
  const { library } = response

  const categories = new Set<string>()

  const books = library.map<Book>(({ book }) => {
    const { title, pages, genre, cover, synopsis, year, ISBN, author } = book

    categories.add(genre)

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
    categories: Array.from(categories),
    books,
  }
}
