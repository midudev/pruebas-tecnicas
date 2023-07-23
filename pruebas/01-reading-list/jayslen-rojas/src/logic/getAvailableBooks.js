export const availableBook = ({ allBooks, booksInList, books }) => {
  let amountOfBooks
  if (books.length === 0) {
    amountOfBooks = 0
  } else if (allBooks.length === 13) {
    amountOfBooks = allBooks.length - booksInList.length
  } else {
    const listBooksFilter = booksInList.filter(item => item.genre === allBooks[0].genre)
    amountOfBooks = allBooks.length - listBooksFilter.length < 0 ? 0 : allBooks.length - listBooksFilter.length
  }

  return amountOfBooks
}
