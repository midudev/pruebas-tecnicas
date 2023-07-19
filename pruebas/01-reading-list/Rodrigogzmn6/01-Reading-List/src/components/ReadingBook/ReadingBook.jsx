import Cross from "../../assets/icon-cross.svg";
import "./ReadingBook.css";
export const ReadingBook = ({ book, index, onClick }) => {
  return (
    <div className="reading-book relative inline-block">
      <img className="reading-book-cover rounded-xl" src={book.cover} />
      <img
        className="reading-book-button cursor-pointer"
        src={Cross}
        onClick={() => {
          onClick(book.ISBN);
        }}
      />
    </div>
  );
};
