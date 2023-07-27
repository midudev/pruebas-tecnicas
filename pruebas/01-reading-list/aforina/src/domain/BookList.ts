import { Book } from './Book'

type BookList = Array<{
  book: Book
}>

const longerBook = (bookList: BookList) => {
  let longerBook = bookList[0].book
  bookList.forEach(book => {
    if (book.book.pages > longerBook.pages) {
      longerBook = book.book
    }
  })
  return longerBook
}

export const BookList = {
  longerBook
}
