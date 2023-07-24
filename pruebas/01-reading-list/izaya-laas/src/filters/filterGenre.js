import { normalizeText } from '../helpers/normalizeText';

export const filterGenre = (books, genre) => {
  const normalizeGenre = normalizeText(genre).toLowerCase();

  return books.filter((book) => {
    const normalizeBookGenre = normalizeText(book.genre).toLowerCase();
    return normalizeBookGenre === normalizeGenre;
  });
};
