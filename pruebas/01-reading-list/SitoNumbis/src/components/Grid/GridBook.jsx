import { Fragment, useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";

import PropTypes from "prop-types";

// components
import Book from "../Book/Book";
import Loading from "../Loading/Loading";

// styles
import styles from "./styles.module.css";

function GridBook({ books }) {
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const [booksToPrint, setBooksToPrint] = useState([]);

  const [isInViewport, targetRef] = useIsInViewport();

  useEffect(() => {
    if (isInViewport) setPage((page) => page + 1);
  }, [isInViewport]);

  useEffect(() => {
    if (books.length) {
      setBooksToPrint(books.slice(0, 100));
      setHasMore(true);
    }
  }, [books]);

  useEffect(() => {
    if (page > 0)
      setBooksToPrint([
        ...booksToPrint,
        ...books.slice(page * 100, (page + 1) * 100),
      ]);
  }, [page]);

  return (
    <Fragment>
      <ul className={styles.bookGrid}>
        {booksToPrint.map((book) => (
          <Book key={book.ISBN} {...book} />
        ))}
      </ul>
      {hasMore ? (
        <div ref={targetRef} className="w-full h-[100px]">
          <Loading className="w-full h-full" />
        </div>
      ) : null}
    </Fragment>
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
      year: PropTypes.number,
      ISBN: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        otherBooks: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ),
};

export default GridBook;
