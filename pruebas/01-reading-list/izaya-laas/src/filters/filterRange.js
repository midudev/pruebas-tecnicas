export const filterRange = {
  onlyMin: (books, { min }) => {
    return books.filter((book) => Number(book.pages) >= Number(min));
  },
  onlyMax: (books, { max }) => {
    return books.filter((book) => {
      return Number(book.pages) <= Number(max);
    });
  },
  both: (books, { min, max }) => {
    return books.filter((book) => {
      return (
        Number(book.pages) >= Number(min) && Number(book.pages) <= Number(max)
      );
    });
  },
};
