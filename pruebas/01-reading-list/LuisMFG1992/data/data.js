export const getBooksData = async () => {
  const response = await fetch('../data/books.json')
  const data = await response.json()
  // console.log(data.library)
  return data.library

  // todo: add handle error
}
