import { ReadingLIstView } from ".";
import { useBooks } from "../../hooks";
import { Book } from "../../models/types";

export interface ReadingProps {
  handleDrop: (e: React.DragEvent<HTMLDivElement>, target: string) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (e: React.DragEvent<HTMLLIElement>, book: Book) => void;
}

export const ReadingList = ({
  handleDrop,
  handleDragOver,
  handleDragStart
}: ReadingProps) => {
  const { readingList, setReadingList, setAvailableBooks, availableBooks } = useBooks();

  const clearReadingList = (): void => {
    const newAvailabreBooks = [...availableBooks, ...readingList];
    const clearList: [] = [];

    setAvailableBooks(newAvailabreBooks);
    setReadingList(clearList);

    window.localStorage.setItem('reading', JSON.stringify(clearList));
    window.localStorage.setItem('available', JSON.stringify(newAvailabreBooks));
  }

  const deleteBook = (book: Book): void => {
    const updatedReadingList = readingList.filter((e) => e.book.ISBN !== book.book.ISBN);
    const isBookInAvailableList = availableBooks.some((e) => e.book.ISBN === book.book.ISBN);

    if (!isBookInAvailableList) {
      const updatedAvailableBooks = [...availableBooks, book];
      setAvailableBooks(updatedAvailableBooks);
      window.localStorage.setItem('available', JSON.stringify(updatedAvailableBooks));
    }

    setReadingList(updatedReadingList);
    window.localStorage.setItem('reading', JSON.stringify(updatedReadingList));
  };

  return (
    <ReadingLIstView
      readingList={readingList}
      clearReadingList={clearReadingList}
      deleteBook={deleteBook}
      handleDragStart={handleDragStart}
      handleDragOver={handleDragOver}
      handleDrop={handleDrop}
    />
  )
};