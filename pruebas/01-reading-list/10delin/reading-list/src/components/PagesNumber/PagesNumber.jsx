import { useState } from "react";
import propTypes from "prop-types";
import Slider from "rc-slider";
import styled from "styled-components";
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

const StyledInput = styled.input`
  width: 20%;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
  background-color: #ffffff;
  text-align: center;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  margin: 20px 0;

  .rc-slider-rail {
    height: 10px;
    background-color: #a0a0a0;
  }

  .rc-slider-track {
    height: 10px;
    background-color: #17a2ff;
  }

  .rc-slider-handle {
    width: 20px;
    height: 20px;
    margin-top: -5px;
    border: 1px solid #000000;
    background-color: #ffffff;
    opacity: 1;
  }
`;

export const PagesNumber = ({ originalBooks, setAvaliableBooks }) => {
  const { t } = useTranslation();

  const defaultPages = 600;
  const [maxPages, setMaxPages] = useState(defaultPages);

  const onChangePages = (value) => {
    setMaxPages(value);
    const filterPages = [...originalBooks].filter(
      (book) => book.book.pages <= maxPages
    );

    setAvaliableBooks(filterPages);
  };

  const findMaxPages = () => {
    const maxPages = Math.max(...originalBooks.map((book) => book.book.pages));
    return maxPages + 100;
  };

  return (
    <StyledWrapper>
      <StyledTitle>{t("home.numberPages")}</StyledTitle>
      <StyledInput
        type="text"
        placeholder="Numero de páginas"
        value={maxPages}
        data-cy="input-pages"
        disabled
      />
      <StyledSlider
        defaultValue={defaultPages}
        min={0}
        max={findMaxPages()}
        onChange={onChangePages}
        data-cy="slider-pages"
      />
    </StyledWrapper>
  );
};

PagesNumber.propTypes = {
  setAvaliableBooks: propTypes.func.isRequired,
  originalBooks: propTypes.array.isRequired,
};
