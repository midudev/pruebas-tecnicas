import { API_URL } from './config'

export async function getBooks () {
  const res = await fetch(API_URL)
  const { library } = await res.json()

  const mappedLibrary = library.map(({ book }) => {
    const { ISBN, title, genre, pages, cover } = book

    return {
      id: ISBN,
      bookTitle: title,
      bookGenre: genre,
      bookPages: pages,
      bookCover: cover
    }
  })

  return mappedLibrary
}
