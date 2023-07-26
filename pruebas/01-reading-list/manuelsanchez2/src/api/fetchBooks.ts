import debugFactory from 'debug'
import { API_BOOKS } from '~/constants/constants'
import { type Book } from '~/types/types'

const debug = debugFactory('fetch/Books')

export async function fetchBooks(): Promise<any[]> {
  try {
    const response = await fetch(API_BOOKS)

    if (!response.ok) {
      throw new Error('Error in the response when fetching the books')
    }

    let data = await response.json()

    data = data.library.map((item: any) => {
      const book = item.book
      return {
        id: book.ISBN,
        title: book.title,
        synopsis: book.synopsis,
        pages: book.pages,
        genre: book.genre,
        year: book.year,
        ISBN: book.ISBN,
        cover: book.cover,
        author: {
          name: book.author.name,
          otherBooks: book.author.otherBooks,
        },
        isInReadingList: false,
        priority: 0,
      }
    }) as Book[]

    // By default we are sorting by year
    data.sort((a: Book, b: Book) => {
      return a.year - b.year
    })

    return data
  } catch (error) {
    console.error(error)
    throw error
  } finally {
    debug('This is the end of fetchBooks')
  }
}
