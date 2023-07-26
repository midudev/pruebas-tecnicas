import { Book } from "../../models/types";
import { InfoBook, List } from "../../sections";

interface ItemProps {
  handleDragStart: (e: React.DragEvent<HTMLLIElement>, book: Book) => void;
  book: Book
  deleteBook: (book: Book) => void
}

export const ReadingItem = ({ handleDragStart, book, deleteBook }: ItemProps) => {
  return (
    <>
      <List
        draggable
        onDragStart={(e) => handleDragStart(e, book)}>
        <img src={book.book.cover} alt={`${book.book.title} in Reading List`} />
        <InfoBook>
          <h4>{book.book.title}</h4>
          <p>{book.book.synopsis}</p>
        </InfoBook>
        <button onClick={() => deleteBook(book)}>x</button>
      </List>
    </>
  )
}