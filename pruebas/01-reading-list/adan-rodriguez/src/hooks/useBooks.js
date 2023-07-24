import { useEffect, useState } from "react";
import { getBooksAvailable, getReadingList } from "../logic/getInitialBooks";
import { setBooksInLocalStorage } from "../logic/storage";

export function useBooks() {
  const [booksAvailable, setBooksAvailable] = useState(getBooksAvailable);
  const [readingList, setReadingList] = useState(getReadingList);

  const handleClickInBookAvailable = (book) => {
    setBooksAvailable((prevBooks) =>
      prevBooks.filter((_book) => _book !== book),
    );
    setReadingList((prevBooks) => [...prevBooks, book]);
  };

  const handleClickInBookInReadingList = (book) => {
    setReadingList((prevBooks) => prevBooks.filter((_book) => _book !== book));
    setBooksAvailable((prevBooks) => [...prevBooks, book]);
  };

  const morePriority = (book) => {
    const newReadingList = [...readingList];
    const index = newReadingList.findIndex((_book) => _book === book);
    const _book = newReadingList[index - 1];
    newReadingList.splice(index - 1, 2, book, _book);
    setReadingList(newReadingList);
  };

  const lessPriority = (book) => {
    const newReadingList = [...readingList];
    const index = newReadingList.findIndex((_book) => _book === book);
    const _book = newReadingList[index + 1];
    newReadingList.splice(index, 2, _book, book);
    setReadingList(newReadingList);
  };

  useEffect(() => {
    setBooksInLocalStorage({ booksAvailable, readingList });
  }, [readingList]);

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      if (e.key === "books") {
        setBooksAvailable(JSON.parse(e.newValue).booksAvailable);
        setReadingList(JSON.parse(e.newValue).readingList);
      }
    });
  }, []);

  return {
    booksAvailable,
    readingList,
    handleClickInBookAvailable,
    handleClickInBookInReadingList,
    morePriority,
    lessPriority,
  };
}
