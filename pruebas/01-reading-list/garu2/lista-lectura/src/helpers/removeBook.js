export const removeBook = (data, book) => {

  const newData = data.filter(item => {
    return item.book.ISBN !== book.book.ISBN
  })

  return newData
}