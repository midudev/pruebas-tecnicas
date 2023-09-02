import { useMemo } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { SingleAvailableBook } from "../SingleAvailableBook/SingleAvailableBook";
import { useTranslation } from "react-i18next";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
  margin: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #314263;
  background-color: #314263;
  color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AvailableBooksContainer = ({
  availableBooks,
  readingBooks,
  setReadingBooks,
}) => {
  const { t } = useTranslation();

  const filteredBooks = useMemo(() => {
    if (readingBooks.length === 0) {
      return availableBooks;
    }

    const newBooksTitles = [...readingBooks].map((book) => book.book.title);
    return availableBooks.filter(
      (book) => !newBooksTitles.includes(book.book.title)
    );
  }, [availableBooks, readingBooks]);

  const alphabeticallySortedBooks = useMemo(() => {
    return filteredBooks.sort((a, b) =>
      a.book.title.localeCompare(b.book.title)
    );
  }, [filteredBooks]);

  return (
    <StyledWrapper>
      <StyledTitle>
        {t("home.availableBooks")} {filteredBooks.length}
      </StyledTitle>
      <StyledContent>
        {alphabeticallySortedBooks.map((book) => (
          <SingleAvailableBook
            key={book.book.title}
            book={book}
            availableBooks={availableBooks}
            setReadingBooks={setReadingBooks}
          />
        ))}
      </StyledContent>
    </StyledWrapper>
  );
};

AvailableBooksContainer.propTypes = {
  setReadingBooks: PropTypes.func.isRequired,
  readingBooks: PropTypes.array.isRequired,
  availableBooks: PropTypes.array.isRequired,
};
