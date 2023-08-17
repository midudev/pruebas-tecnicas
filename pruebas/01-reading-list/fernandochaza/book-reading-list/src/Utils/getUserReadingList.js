export function getUserReadingList() {
  const storedData = localStorage.getItem('readingList')
  const readingList = storedData ? JSON.parse(storedData) : []

  return readingList
}
