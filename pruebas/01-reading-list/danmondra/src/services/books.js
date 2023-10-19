import mockedBooks from '../mocks/newBooks.json'

export async function getBooks() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockedBooks)
    }, 50)
  })
}
