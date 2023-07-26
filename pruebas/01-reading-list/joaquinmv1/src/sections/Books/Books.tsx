import { useEffect } from "react";
import { ReadingList } from "..";
import { BooksList } from "../../components";
import { sendMessage } from "../../helpers/sendMessage";
import { useBooks, useChannel } from "../../hooks";
import { Book } from "../../models/types";
import { Layout } from "../../pages";

interface BooksProps {
  newBooks: Array<Book>;
}

const target = 'available';

export const Books = ({ newBooks }: BooksProps) => {
  const { readingList, setAvailableBooks, setReadingList, availableBooks } = useBooks();
  const channel = useChannel();

  const moveBookToAvailableList = (book: Book): void => {
    const isBookInReadingList = readingList.some(e => e.book.title === book.book.title);
    const updatedAvailableBooks = availableBooks.filter(b => b.book.ISBN !== book.book.ISBN);
    const condition = isBookInReadingList ? readingList : [...readingList, book];

    setAvailableBooks(updatedAvailableBooks);
    sendMessage(updatedAvailableBooks, 'AVAILABLE_BOOKS_UPDATE', channel)

    setReadingList(condition);
    sendMessage(condition, 'READING_LIST_UPDATE', channel);
  };

  const moveBookToReadingList = (book: Book): void => {
    const isBookInAvailableList = availableBooks.some(x => x.book.ISBN === book.book.ISBN);

    if (isBookInAvailableList) {
      const updateAvailable = [...availableBooks];
      setAvailableBooks(updateAvailable);
      sendMessage(updateAvailable, 'AVAILABLE_BOOKS_UPDATE', channel);
    } else {
      const updatedAvailableBooks = [...availableBooks, book];
      const updateBooksInReading = readingList?.filter(b => b.book.ISBN !== book.book.ISBN);

      setAvailableBooks(updatedAvailableBooks);
      sendMessage(updatedAvailableBooks, 'AVAILABLE_BOOKS_UPDATE', channel);

      setReadingList(updateBooksInReading);
      sendMessage(updateBooksInReading, 'READING_LIST_UPDATE', channel);
    }
  };

  const moveBook = (book: Book, targetList: string): void => {
    const isAvailableList = targetList === target;
    isAvailableList ? moveBookToAvailableList(book) : moveBookToReadingList(book);
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, book: Book): void => {
    e.dataTransfer.setData("book", JSON.stringify(book));
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
  };

  const handleDropBook = (e: React.DragEvent<HTMLElement>, target: string): void => {
    const data = e.dataTransfer.getData("book");
    const book = JSON.parse(data) as Book;
    moveBook(book, target);
  };

  useEffect(() => {
    window.localStorage.setItem('reading', JSON.stringify(readingList));
    window.localStorage.setItem('available', JSON.stringify(availableBooks));
  }, [readingList, availableBooks]);

  return (
    <>
      <Layout>
        <BooksList
          availableBooks={newBooks}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDropBook}
        />
        <ReadingList
          handleDrop={handleDropBook}
          handleDragOver={handleDragOver}
          handleDragStart={handleDragStart}
        />
      </Layout>
    </>
  )
}