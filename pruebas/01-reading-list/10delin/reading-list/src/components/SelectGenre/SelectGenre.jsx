import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  font-family: "Roboto", sans-serif;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  margin-top: 3px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
  background-color: #ffffff;
`;

const StyledOption = styled.option`
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
`;

export const SelectGenre = ({ originalBooks, setAvailableBooks }) => {
  const { t } = useTranslation();

  const uniqueGenres = [
    ...new Set(originalBooks.map((book) => book.book.genre)),
  ];

  const onGenreValue = (e) => {
    const genreValue = e.target.value;
    if (genreValue === "") {
      setAvailableBooks(originalBooks);
      return;
    }
    const booksByGenre = [...originalBooks].filter(
      (book) => book.book.genre === genreValue
    );
    setAvailableBooks(booksByGenre);
  };

  return (
    <StyledWrapper>
      <StyledTitle>{t("home.genre")}</StyledTitle>
      <StyledSelect data-cy="select-genre" onChange={onGenreValue}>
        <StyledOption value="">{t("home.allBooks")}</StyledOption>
        {uniqueGenres.map((genre, index) => {
          return (
            <StyledOption key={index} value={genre}>
              {genre}
            </StyledOption>
          );
        })}
      </StyledSelect>
    </StyledWrapper>
  );
};

SelectGenre.propTypes = {
  setAvailableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
