import PropTypes from "prop-types";
import styled from "styled-components";
import { normaliceText } from "../../utils/normaliceText";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  font-family: "Roboto", sans-serif;
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
  background-color: #ffffff;
`;

const StyledRemoveButton = styled.input`
  position: absolute;
  right: -20px;
  top: 4px;
  width: 45px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
  background-color: none;
  cursor: pointer;
  z-index: 0;
`;

export const SearchBooks = ({ originalBooks, setAvaliableBooks }) => {
  const [bookTitle, setBookTitle] = useState("");

  const { t } = useTranslation();

  const onSearchTitle = (e) => {
    e.preventDefault();

    const searchTitle = [...originalBooks].filter((book) =>
      normaliceText(book.book.title).includes(normaliceText(bookTitle))
    );

    if (searchTitle.length === 0) {
      alert("No se encontró el libro");
      setBookTitle("");
      setAvaliableBooks(originalBooks);
      return;
    }
    setAvaliableBooks(searchTitle);
  };

  const removeFilter = () => {
    setBookTitle("");
    setAvaliableBooks(originalBooks);
  };

  return (
    <StyledWrapper>
      <StyledTitle>{t("home.searchBook")}</StyledTitle>
      <form onSubmit={onSearchTitle}>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder={t("home.writeBookName")}
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            data-cy="input-search"
          />
          {bookTitle ? (
            <StyledRemoveButton
              type="button"
              onClick={removeFilter}
              value="❌"
            />
          ) : null}
        </StyledInputContainer>
      </form>
    </StyledWrapper>
  );
};

SearchBooks.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
