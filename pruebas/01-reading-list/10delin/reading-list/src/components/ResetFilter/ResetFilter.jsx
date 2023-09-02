import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 0 20px 0;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #dbdbdb;
  color: #ffffff;
  text-align: center;
  padding: 7px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;

  ${({ $availableBooks, $originalBooks }) =>
    $availableBooks.length !== $originalBooks.length
      ? `
      background-color: #2472e7;
      &:hover {
        background-color: #0a3474;
        color: #ffffff;
        cursor: pointer;
  }
      ;
`
      : null}
`;

export const ResetFilter = ({
  availableBooks,
  setAvailableBooks,
  originalBooks,
}) => {
  const { t } = useTranslation();

  const handleReset = () => {
    setAvailableBooks(originalBooks);
  };

  return (
    <StyledWrapper>
      <StyledButton
        $availableBooks={availableBooks}
        $originalBooks={originalBooks}
        onClick={handleReset}
      >
        {t("home.resetFilter")}
      </StyledButton>
    </StyledWrapper>
  );
};

ResetFilter.propTypes = {
  setAvailableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
  availableBooks: PropTypes.array.isRequired,
};
