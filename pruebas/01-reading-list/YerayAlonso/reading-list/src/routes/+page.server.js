import data from '$lib/books.json'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const { library } = data
  let books = []
  books = library.map((item) => item.book)
  
  const genres = []
  books.forEach((book) => {
    const { genre } = book
    if (!genres.includes(genre)) {
      genres.push(genre)
    }
  })

  return { books, genres }
}
