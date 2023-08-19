export function getUserCompletedBooks() {
  const storedData = localStorage.getItem('completedBooks')
  const completedBooks = storedData ? JSON.parse(storedData) : []

  return completedBooks
}
