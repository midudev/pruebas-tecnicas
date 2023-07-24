export const filterBooks = ({ booksAvailable, category, search, pages }) => {
  let filteredBooks = booksAvailable;

  if (category) {
    filteredBooks = filteredBooks.filter((book) => book.genre === category);
  }

  if (search) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  filteredBooks = filteredBooks.filter((book) => book.pages > pages);

  return filteredBooks;
};
