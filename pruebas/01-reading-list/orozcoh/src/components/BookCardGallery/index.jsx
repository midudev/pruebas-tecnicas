import PropTypes from "prop-types";
import { BookCard } from "../BookCard";

export const BookCardGallery = ({ booksData }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: "10px",
      }}
    >
      {booksData.map((book, index) => {
        return <BookCard key={"book-" + index} bookData={book} />;
      })}
    </div>
  );
};

BookCardGallery.propTypes = {
  booksData: PropTypes.array,
};
