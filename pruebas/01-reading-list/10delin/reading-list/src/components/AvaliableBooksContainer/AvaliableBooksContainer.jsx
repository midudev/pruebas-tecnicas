import { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SingleAvaliableBook } from "../SingleAvaliableBook/SingleAvaliableBook";
import { useTranslation } from "react-i18next";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding-right: ${({ $readingBooks }) =>
    $readingBooks.length > 0 ? "calc(250px + 50px)" : "0rem"};
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
`;

export const AvaliableBooksContainer = ({
  avaliableBooks,
  readingBooks,
  setReadingBooks,
}) => {
  const { t } = useTranslation();

  const filteredBooks = useMemo(() => {
    if (readingBooks.length === 0) {
      return avaliableBooks;
    }

    const newBooksTitles = [...readingBooks].map((book) => book.book.title);
    return avaliableBooks.filter(
      (book) => !newBooksTitles.includes(book.book.title)
    );
  }, [avaliableBooks, readingBooks]);

  const alphabeticallySortedBooks = useMemo(() => {
    return filteredBooks.sort((a, b) =>
      a.book.title.localeCompare(b.book.title)
    );
  }, [filteredBooks]);

  return (
    <StyledWrapper $readingBooks={readingBooks}>
      <StyledTitle>
        {t("home.availableBooks")} {filteredBooks.length}
      </StyledTitle>
      <StyledContent>
        {alphabeticallySortedBooks.map((book) => (
          <SingleAvaliableBook
            key={book.book.title}
            book={book}
            avaliableBooks={avaliableBooks}
            setReadingBooks={setReadingBooks}
          />
        ))}
      </StyledContent>
    </StyledWrapper>
  );
};

AvaliableBooksContainer.propTypes = {
  setReadingBooks: PropTypes.func.isRequired,
  readingBooks: PropTypes.array.isRequired,
  avaliableBooks: PropTypes.array.isRequired,
};
