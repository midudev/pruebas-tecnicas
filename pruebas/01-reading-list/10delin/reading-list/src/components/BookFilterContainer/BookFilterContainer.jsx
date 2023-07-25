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
`;

export const BookFilterContainer = ({ originalBooks, setAvaliableBooks }) => {
  return (
    <StyledWrapper>
      <SelectGenre
        originalBooks={originalBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
      <SearchBooks
        originalBooks={originalBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
      <PagesNumber
        originalBooks={originalBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
    </StyledWrapper>
  );
};

BookFilterContainer.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
