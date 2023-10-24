import PropTypes from "prop-types";
import { BookCard } from "../BookCard";
import { useSelector } from "react-redux";

export const BookCardGallery = ({ booksData }) => {
  const userBooks = useSelector((state) => state.user.bookmarks);
  console.log("USER BOOKS FROM STORE: ", userBooks);
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
        if (userBooks.includes(book)) console.log("Should have start");
        else console.log("should not have star");
        return (
          <BookCard
            key={"book-" + index}
            bookData={book}
            isFav={userBooks.includes(book)}
          />
        );
      })}
    </div>
  );
};

BookCardGallery.propTypes = {
  booksData: PropTypes.array,
};
