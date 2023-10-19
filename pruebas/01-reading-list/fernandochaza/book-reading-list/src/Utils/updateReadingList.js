export function updateReadingList(bookData) {
  const storedData = localStorage.getItem('readingList')
  const readingList = storedData ? JSON.parse(storedData) : []

  const isBookInList = readingList.some((book) => book.id === bookData.id)

  const updatedReadingList = isBookInList
    ? readingList.filter((book) => book.id !== bookData.id)
    : [...readingList, bookData]

  localStorage.setItem('readingList', JSON.stringify(updatedReadingList))
}
