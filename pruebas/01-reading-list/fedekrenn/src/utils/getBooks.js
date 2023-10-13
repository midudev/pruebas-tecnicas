import books from './books.json'

export default function getBooks () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books)
    }, 1000)
  })
}
