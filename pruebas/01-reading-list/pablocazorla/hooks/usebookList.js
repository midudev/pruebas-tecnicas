import { useEffect, useState } from "react";
import { useStore } from "@/store";
import useGetData from "@/hooks/useGetData";
import BookService from "@/services/book";

const useBookList = () => {
  const [getBooklist, bookListOriginal] = useGetData({
    service: BookService.getBooklist,
  });

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    getBooklist();
  }, [getBooklist]);

  // Store
  const filters = useStore((state) => state.filters);
  const updateTotal = useStore((state) => state.updateTotal);
  const readingLists = useStore((state) => state.readingLists);
  const currentReadingListId = useStore((state) => state.currentReadingListId);
  //

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (bookListOriginal) {
      updateTotal(bookListOriginal.length);
    }
  }, [bookListOriginal, updateTotal]);

  useEffect(() => {
    if (bookListOriginal) {
      const { genre, maxPages } = filters;

      const currentReadingList = readingLists[currentReadingListId] || null;

      const newBookList = bookListOriginal.filter((book) => {
        if (
          currentReadingList &&
          currentReadingList.books &&
          currentReadingList.books.indexOf(book.ISBN) < 0
        ) {
          return false;
        }
        if (maxPages && maxPages < book.pages) {
          return false;
        }
        if (genre) {
          return genre === book.genre;
        }
        return true;
      });

      setBookList(newBookList);
    }
  }, [bookListOriginal, filters, readingLists, currentReadingListId]);

  return {
    bookList,
    selectedBook,
    setSelectedBook,
  };
};

export default useBookList;
