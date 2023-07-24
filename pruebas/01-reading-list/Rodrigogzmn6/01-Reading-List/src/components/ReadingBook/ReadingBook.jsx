import Cross from "../../assets/icon-cross.svg";
import "./ReadingBook.css";
export const ReadingBook = ({ book, index, onClick }) => {
  return (
    <div className="reading-book relative inline-block sm:w-1/4 lg:w-full lg:flex lg:flex-col lg:items-center ">
      <img
        className="reading-book-cover rounded-lg sm:h-64 lg:w-full lg:h-auto"
        src={book.cover}
      />
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
