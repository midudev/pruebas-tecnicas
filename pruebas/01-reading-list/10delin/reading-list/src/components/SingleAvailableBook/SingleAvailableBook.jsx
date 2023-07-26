import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";
import styled from "styled-components";

import { useWindowSize } from "../../hooks/useWindowSize";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const StyledImg = styled.img`
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  width: 250px;
  max-width: 250px;
  height: 400px;
  max-height: 400px;

  &:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 200px;
    max-width: 200px;
    height: 300px;
    max-height: 300px;
  }
`;

const StyledHoverContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s;

  @media (max-width: 768px) {
    opacity: initial;
    transition: initial;
    background-color: initial;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

const StyledTitle = styled.h2`
  color: white;
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledAddButton = styled.button`
  background-color: #10af37;
  color: white;
  border: none;
  padding: 20px 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0b8a2b;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
    font-size: 10px;
    border-radius: 100%;
  }
`;

const StyledHoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover ${StyledHoverContent} {
    opacity: 1;
  }
`;

export const SingleAvailableBook = ({
  book,
  setReadingBooks,
  availableBooks,
}) => {
  const { t } = useTranslation();
  const size = useWindowSize();

  const addBook = (e) => {
    const selectedBookTitle = e.target.value;
    const book = [...availableBooks].find(
      (book) => book.book.title === selectedBookTitle
    );
    setReadingBooks((prevNewBooks) => [...prevNewBooks, book]);
  };

  return (
    <StyledWrapper>
      <StyledHoverContainer>
        <StyledImg src={book.book.cover} alt={book.book.title} />
        <StyledHoverContent>
          <StyledTitle>{book.book.title}</StyledTitle>
          <StyledAddButton
            onClick={addBook}
            value={book.book.title}
            data-cy="available-book"
          >
            {size.width > 768 ? t("home.addBook") : "➕"}
          </StyledAddButton>
        </StyledHoverContent>
      </StyledHoverContainer>
    </StyledWrapper>
  );
};

SingleAvailableBook.propTypes = {
  book: PropTypes.object.isRequired,
  setReadingBooks: PropTypes.func.isRequired,
  availableBooks: PropTypes.array.isRequired,
};
