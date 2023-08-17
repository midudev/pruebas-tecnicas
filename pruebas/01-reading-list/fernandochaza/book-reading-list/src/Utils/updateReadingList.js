export function updateReadingList(bookData) {
  const storedData = localStorage.getItem('readingList')
  const readingList = storedData ? JSON.parse(storedData) : []

  if (!storedData?.includes(bookData)) {
    const updateReadingList = [...readingList, bookData]
    localStorage.setItem('readingList', JSON.stringify(updateReadingList))
  } else {
    const updatedReadingList = readingList.filter((item) => item !== bookData)
    localStorage.setItem('readingList', JSON.stringify(updatedReadingList))
  }
}
