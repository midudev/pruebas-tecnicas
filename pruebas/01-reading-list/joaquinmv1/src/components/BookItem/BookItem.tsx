import { LiList } from "..";
import { Book } from "../../models/types";

interface BookProps {
  book: Book;
  onDragStart: (e: React.DragEvent<HTMLLIElement>) => void;
}

export const BookItem = ({ book, onDragStart }: BookProps) => {

  return (
    <>
      <LiList onDragStart={onDragStart}>
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