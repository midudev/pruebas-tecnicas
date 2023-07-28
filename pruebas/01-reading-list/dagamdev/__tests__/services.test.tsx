import { getBook, getBooks, getBooksByISBNs } from "@/utils/services"
import { render, renderHook, screen } from "@testing-library/react"
import books from '../src/utils/books.json'

describe('Services tests', () => {
  test('getBooks()', () => {
    expect(getBooks()).toStrictEqual(books.library.map(b=> b.book))
  })

  test('getBook()', ()=> {
    const book = books.library[0].book
    expect(getBook('978-0618640157')).toBe(book)
  })

  test('getBooksByISBNs()', ()=> {
    const ISBNS = ['978-0553103540', '978-0747532699', '978-0451524935']
    const booksExpecteds = books.library.slice(1, 4).map(b=> b.book)

    expect(getBooksByISBNs(ISBNS)).toStrictEqual(booksExpecteds)
  })
})