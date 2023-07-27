import type { Book } from '@/types'

interface Item {
  book: Book
}

export async function getBooks() {
  return fetch(`/api/books`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }

      return res.json()
    })
    .then(({ library }) => {
      const books = library.map((item: Item) => {
        return item.book
      })

      return books
    })
}
