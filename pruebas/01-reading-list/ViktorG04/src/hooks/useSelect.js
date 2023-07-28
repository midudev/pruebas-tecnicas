import books from "../mocks/books.json";

export const useSelect = () => {
  //find and create list to genres
  const genres = books.library.map((book) => book.book.genre);
  const genresUnique = [...new Set([...genres, "All"])].sort();

  return { genres: genresUnique };
};

export default useSelect;
