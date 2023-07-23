import PropTypes from "prop-types";
import { BookCard } from "../BookCard";

export const BookCardContainer = ({ booksData }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {booksData.map((book, index) => {
        return <BookCard key={"book-" + index} bookData={book["book"]} />;
      })}
    </div>
  );
};

BookCardContainer.propTypes = {
  booksData: PropTypes.array,
};
