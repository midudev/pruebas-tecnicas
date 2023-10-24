import React from "react";
import { getBooks } from "~/services/books";
import { IBook, IBooksList } from "~/types/books";

interface IAvailableGenresOptions {
  value: string;
  label: string;
}

interface IAvailableSearchOptions {
  genre: IAvailableGenresOptions[];
  minPage: number | null;
}

export const useBookShelf = () => {
  const originalBooksList = getBooks();
  const [readingList, setReadingList] = React.useState<IBook[]>([]);
  const [selectedPreviewBook, setSelectedPreviewBook] =
    React.useState<IBook | null>(null);
  const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null);

  const updateReadingList = (book: IBook) => {
    setReadingList((prev) => [...prev, book]);
  };

  const deleteBookFromReadingList = (isbn: string) => {
    const updatedList = readingList.filter((book) => book.ISBN !== isbn);
    setReadingList(updatedList);
  };

  const isBookAlreadyOnReadingList = () => {
    if (!selectedPreviewBook) return false;
    return (
      readingList.findIndex(
        (readingBook) =>
          readingBook.ISBN.toLowerCase() ===
          selectedPreviewBook.ISBN.toLowerCase()
      ) >= 0
    );
  };

  const setRandomBookFromList = () => {
    // console.log("setRandomBookFromList");
    const randomNumber = Math.trunc(Math.random() * originalBooksList.library.length);
    const getRandomBook = originalBooksList.library[randomNumber];
    console.log({randomNumber,getRandomBook})
    if (getRandomBook?.book) {
      setReadingList((prev) => [...prev, getRandomBook.book]);
    }
  };

  const availableSearchOptions = React.useMemo(
    () =>
      originalBooksList.library.reduce<IAvailableSearchOptions>(
        (prev, curr) => {
          /* The min page available */
          let countPage = prev.minPage;
          if (countPage === null) {
            countPage = curr.book.pages;
          } else {
            countPage =
              curr.book.pages >= countPage ? curr.book.pages : countPage;
          }

          /*Previous label added*/
          const isLabelAlreadyInserted = prev.genre.some(
            (val) => val.label === curr.book.genre
          );

          if (isLabelAlreadyInserted) {
            return {
              ...prev,
              genre: prev.genre,
              minPage: countPage,
            };
          }

          return {
            ...prev,
            genre: [
              ...prev.genre,
              { value: curr.book.genre, label: curr.book.genre },
            ],
            minPage: countPage,
          };
        },
        { genre: [], minPage: null }
      ),
    [originalBooksList.library]
  );

  const booksOnShelf = React.useMemo(
    () =>
      originalBooksList.library.filter((book) => {
        const foundIndexBook = readingList.findIndex((b) => {
          const sameISBN = b.ISBN === book.book.ISBN;
          return sameISBN;
        });

        if (foundIndexBook < 0) {
          if (!selectedGenre) return true;
          return book.book.genre.toLowerCase() === selectedGenre.toLowerCase();
        }
        return false;
      }),
    [selectedGenre, readingList, originalBooksList.library]
  );

  return {
    availableSearchOptions,
    setSelectedGenre,
    updateReadingList,
    deleteBookFromReadingList,
    booksOnShelf,
    isBookAlreadyOnReadingList,
    listTotalBooks: originalBooksList.library,
    readingList,
    selectedPreviewBook,
    setRandomBookFromList,
    setSelectedPreviewBook,
  };
};
