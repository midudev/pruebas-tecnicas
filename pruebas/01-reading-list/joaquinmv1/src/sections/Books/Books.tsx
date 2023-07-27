import { useEffect, useState } from "react";
import { ReadingList } from "..";
import { BooksList } from "../../components";
import { useBooks, useChannel } from "../../hooks";
import { Book } from "../../models/types";
import { Layout } from "../../pages";
import { addDragOverClass, removeDragOverClass, sendMessage } from "../../helpers";

interface BooksProps {
  newBooks: Array<Book>;
}

const target = 'available';

export const Books = ({ newBooks }: BooksProps) => {
  const [dragItemIndex, setDragItemIndex] = useState<number>(0);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number>(0);

  const { readingList, setAvailableBooks, setReadingList, availableBooks } = useBooks();
  const channel = useChannel();

  const moveBookToAvailableList = (book: Book): void => {
    const isBookInReadingList = readingList.some(e => e.book.title === book.book.title);
    const updatedAvailableBooks = availableBooks.filter(b => b.book.ISBN !== book.book.ISBN);
    const condition = isBookInReadingList ? readingList : [...readingList, book];

    setAvailableBooks(updatedAvailableBooks);
    sendMessage(updatedAvailableBooks, 'AVAILABLE_BOOKS_UPDATE', channel);

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
      setReadingList((prevBooks: Book[]) => {
        const dragItem = prevBooks[dragItemIndex];
        prevBooks.splice(dragItemIndex, 1)[0];
        prevBooks.splice(dragOverItemIndex, 0, dragItem);
        
        const updateBooksInReading = prevBooks?.filter(b => b.book.ISBN !== book.book.ISBN);
        sendMessage(updateBooksInReading, 'READING_LIST_UPDATE', channel);
        return updateBooksInReading;
      }
      );

      const updatedAvailableBooks = [...availableBooks, book];

      setAvailableBooks(updatedAvailableBooks);
      sendMessage(updatedAvailableBooks, 'AVAILABLE_BOOKS_UPDATE', channel);
    }
  };

  const moveBook = (book: Book, targetList: string): void => {
    const isAvailableList = targetList === target;
    isAvailableList ? moveBookToAvailableList(book) : moveBookToReadingList(book);
  };

  const handleDragStart = (e: React.DragEvent<HTMLElement>, book: Book, index: number): void => {
    e.dataTransfer.setData("book", JSON.stringify(book));
    setDragItemIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
  };

  const handleDropBook = (e: React.DragEvent<HTMLElement>, target: string): void => {
    const data = e.dataTransfer.getData("book");
    const book = JSON.parse(data) as Book;
    moveBook(book, target);

    removeDragOverClass(e, "dropzone", "dragover");
  };

  const handleDragEnter = (e: React.DragEvent<HTMLElement>, index: number): void => {
    setDragOverItemIndex(index);
    addDragOverClass(e, "dropzone", "dragover");
  }

  const handleDragLeave = (e: React.DragEvent<HTMLElement>): void => {
    setDragOverItemIndex(0);
    removeDragOverClass(e, "dropzone", "dragover");
  }

  const handleDragEnd = () => {
    setDragItemIndex(0);
    setDragOverItemIndex(0);
  }

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
          handleDragEnter={handleDragEnter}
          handleDragLeave={handleDragLeave}
          handleDragEnd={handleDragEnd}
        />
      </Layout>
    </>
  )
}