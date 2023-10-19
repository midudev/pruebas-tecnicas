import bookMocks from '@/mocks/books.json'

export const CGenres = (() => {
  const tempGenres: string[] = []
  let tempGenre: string
  bookMocks.library.forEach((wrapedBook) => {
    tempGenre = wrapedBook.book.genre

    if (tempGenres.includes(tempGenre)) return

    tempGenres.push(tempGenre)
  })

  return tempGenres
})()
