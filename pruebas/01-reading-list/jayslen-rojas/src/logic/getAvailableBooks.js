export const availableBook = ({ allBooks, booksInList }) => {
  let amountOfBooks
  if (allBooks.length === 13) {
    amountOfBooks = allBooks.length - booksInList.length
  } else {
    const listBooksFilter = booksInList.filter(item => item.genre === allBooks[0].book.genre)
    amountOfBooks = allBooks.length - listBooksFilter.length
  }
  return amountOfBooks
}
