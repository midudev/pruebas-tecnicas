export const getBooks = async () => {
  const res = await fetch('books.json')
  if (res.ok) {
    const { library } = await res.json()
    return {
      library,
      quantity: library.length
    }
  } else {
    throw new Error('Cannot get the books')
  }
}
