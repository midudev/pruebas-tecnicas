import getBooks from '@websiteApi/getBooks';
import { BookWithIdType } from '@websiteApi/Interfaces';
import { DetailsViewArgs } from './Interfaces';

export default function useDetailsView({ id: linkId }: DetailsViewArgs) {
  const listOfBooks = getBooks();

  const bookData = listOfBooks.find(({ id }) => id === parseInt(linkId, 10)) as BookWithIdType;

  const extraInfo = [
    `Genre: ${bookData.book.genre}`,
    `Year: ${bookData.book.year}`,
    `${bookData.book.pages} Pages`,
    `ISBN: ${bookData.book.ISBN}`,
  ];

  return { bookData, extraInfo };
}
