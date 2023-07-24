import { normalizeText } from '../helpers/normalizeText';

export const filterSpecificBook = (books, specificBook) => {
  const normalizeSpecificBook = normalizeText(specificBook).toLowerCase();

  return books.filter((book) => {
    const normalizeTitleBook = normalizeText(book.title).toLowerCase();
    return normalizeTitleBook.includes(normalizeSpecificBook);
  });
};
