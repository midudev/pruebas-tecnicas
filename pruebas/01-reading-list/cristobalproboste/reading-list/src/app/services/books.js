import booksData from '../../../../../../01-reading-list/books.json';
const getBooks = () => {
  const { library } = booksData;
  return library;
};

const getBookByISBN = (ISBN) => {
  const { library } = booksData;
  return library.find(({ book }) => book.ISBN === ISBN);
};

const booksService = {
  getBooks,
  getBookByISBN,
};

export default booksService;
