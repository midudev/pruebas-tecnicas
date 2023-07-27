import books from './books.json'

export default function getBooks() {
  return new Promise((res) => {
    setTimeout(() => {
      res(books)
    }, 1000)
  })
}
