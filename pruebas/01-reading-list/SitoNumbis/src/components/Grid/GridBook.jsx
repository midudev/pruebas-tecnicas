import PropTypes from "prop-types";

// components
import Book from "../Book/Book";

// styles
import styles from "./styles.module.css";

function GridBook({ books }) {
  return (
    <ul className={styles.bookGrid}>
      {books.map((book) => (
        <Book key={book.ISBN} {...book} />
      ))}
    </ul>
  );
}

GridBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pages: PropTypes.number,
      genre: PropTypes.string,
      cover: PropTypes.string,
      synopsis: PropTypes.string,
      year: PropTypes.string,
      ISBN: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        otherBooks: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ),
};

export default GridBook;
