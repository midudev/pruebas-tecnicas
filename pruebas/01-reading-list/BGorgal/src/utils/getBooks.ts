import data from '../mocks/books.json'

export const getBooks = async () => {
  return await new Promise((resolve, reject) => resolve(data))
}
