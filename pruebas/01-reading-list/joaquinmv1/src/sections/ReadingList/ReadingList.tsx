import { ReadingListView } from ".";
import { sendMessage } from "../../helpers";
import { useBooks, useChannel } from "../../hooks";
import { Book } from "../../models/types";

export interface ReadingProps {
  handleDrop: (e: React.DragEvent<HTMLElement>, target: string) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (e: React.DragEvent<HTMLElement>, book: Book, index:number) => void;
  handleDragEnter: (e: React.DragEvent<HTMLElement>, index: number) => void;
  handleDragLeave: (e: React.DragEvent<HTMLElement>) => void;
}

export const ReadingList = ({
  handleDrop,
  handleDragOver,
  handleDragStart,
  handleDragEnter,
  handleDragLeave,
}: ReadingProps) => {
  const { readingList, setReadingList, setAvailableBooks, availableBooks } = useBooks();
  const channel = useChannel()

  const clearReadingList = (): void => {
    const newAvailabreBooks = [...availableBooks, ...readingList];
    const clearList: [] = [];

    setAvailableBooks(newAvailabreBooks);
    setReadingList(clearList);

    sendMessage(newAvailabreBooks, 'AVAILABLE_BOOKS_UPDATE', channel);
    sendMessage(clearList, 'READING_LIST_UPDATE', channel);

    window.localStorage.setItem('reading', JSON.stringify(clearList));
    window.localStorage.setItem('available', JSON.stringify(newAvailabreBooks));
  }

  const deleteBook = (book: Book): void => {
    const updatedReadingList = readingList.filter((e) => e.book.ISBN !== book.book.ISBN);
    const isBookInAvailableList = availableBooks.some((e) => e.book.ISBN === book.book.ISBN);

    if (!isBookInAvailableList) {
      const updatedAvailableBooks = [...availableBooks, book];
      setAvailableBooks(updatedAvailableBooks);
      sendMessage(updatedAvailableBooks, 'AVAILABLE_BOOKS_UPDATE', channel);
      window.localStorage.setItem('available', JSON.stringify(updatedAvailableBooks));
    }

    setReadingList(updatedReadingList);
    sendMessage(updatedReadingList, 'READING_LIST_UPDATE', channel);
    window.localStorage.setItem('reading', JSON.stringify(updatedReadingList));
  };

  return (
    <ReadingListView
      readingList={readingList}
      clearReadingList={clearReadingList}
      deleteBook={deleteBook}
      handleDragStart={handleDragStart}
      handleDragOver={handleDragOver}
      handleDrop={handleDrop}
      handleDragEnter={handleDragEnter}
      handleDragLeave={handleDragLeave}
    />
  )
};