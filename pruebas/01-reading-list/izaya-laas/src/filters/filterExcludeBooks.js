export const filterExcludeBooks = (books, readingListISBN) =>
  books.filter((book) => {
    return !readingListISBN.includes(book.ISBN);
  });
