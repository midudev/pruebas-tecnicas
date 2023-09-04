import { LiList } from "..";
import { Book } from "../../models/types";

interface BookProps {
  book: Book;
  onDragStart: (e: React.DragEvent<HTMLElement>, book: Book, index: number) => void;
  index: number;
}

export const BookItem = ({ book, onDragStart, index }: BookProps) => {

  return (
    <>
      <LiList onDragStart={(e) => onDragStart(e, book, index)}>
        <img
          src={book.book.cover}
          alt={`${book.book.title} - availableList`}
        />
        <h4>{book.book.title}</h4>
        <p>{book.book.author.name}</p>
      </LiList>
    </>
  );
};