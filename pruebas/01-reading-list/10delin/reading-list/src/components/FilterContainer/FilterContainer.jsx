import styled from "styled-components";
import PropTypes from "prop-types";

import { ResetApp } from "../ResetApp/ResetApp";
import { ResetFilter } from "../ResetFilter/ResetFilter";
import { BookFilterContainer } from "../BookFilterContainer/BookFilterContainer";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 220px 0 80px 0;
  background-color: #f3f3f3;
  color: #000000;
  text-align: center;
  padding-right: ${({ $readingBooks }) =>
    $readingBooks.length > 0 ? "calc(250px + 50px)" : "0rem"};

  @media (max-width: 768px) {
    align-items: center;
    margin: 0;
    margin-top: 150px;
    padding-right: 0rem;
  }
`;

export const FilterContainer = ({
  originalBooks,
  availableBooks,
  setAvailableBooks,
  readingBooks,
}) => {
  return (
    <StyledWrapper $readingBooks={readingBooks}>
      <ResetApp />
      <BookFilterContainer
        originalBooks={originalBooks}
        setAvailableBooks={setAvailableBooks}
      />
      <ResetFilter
        availableBooks={availableBooks}
        originalBooks={originalBooks}
        setAvailableBooks={setAvailableBooks}
      />
    </StyledWrapper>
  );
};

FilterContainer.propTypes = {
  setAvailableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
  readingBooks: PropTypes.array.isRequired,
  availableBooks: PropTypes.array.isRequired,
};
