export function updateCompletedBooks(bookData) {
  const storedData = localStorage.getItem('completedBooks')
  const completedBooks = storedData ? JSON.parse(storedData) : []

  const isBookCompleted = completedBooks.some((book) => book.id === bookData.id)

  const updateCompletedBooks = isBookCompleted
    ? completedBooks.filter((book) => book.id !== bookData.id)
    : [...completedBooks, bookData]

  localStorage.setItem('completedBooks', JSON.stringify(updateCompletedBooks))
}
