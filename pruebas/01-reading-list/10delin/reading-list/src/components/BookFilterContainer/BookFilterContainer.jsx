import PropTypes from "prop-types";
import styled from "styled-components";
import "rc-slider/assets/index.css";

import { PagesNumber } from "../PagesNumber/PagesNumber";
import { SearchBooks } from "../SearchBooks/SearchBooks";
import { SelectGenre } from "../SelectGenre/SelectGenre";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 0 40px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BookFilterContainer = ({ originalBooks, setAvailableBooks }) => {
  return (
    <StyledWrapper>
      <SelectGenre
        originalBooks={originalBooks}
        setAvailableBooks={setAvailableBooks}
      />
      <SearchBooks
        originalBooks={originalBooks}
        setAvailableBooks={setAvailableBooks}
      />
      <PagesNumber
        originalBooks={originalBooks}
        setAvailableBooks={setAvailableBooks}
      />
    </StyledWrapper>
  );
};

BookFilterContainer.propTypes = {
  setAvailableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
