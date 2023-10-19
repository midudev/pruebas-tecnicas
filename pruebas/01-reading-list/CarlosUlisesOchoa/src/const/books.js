import booksData from '@/mockups/books.json'
let booksArray = booksData && booksData.library?.length > 0 ? booksData.library : []
if (booksArray.length > 0) {
  booksArray = booksArray.map((item) => item.book)
}

export const books = booksArray
