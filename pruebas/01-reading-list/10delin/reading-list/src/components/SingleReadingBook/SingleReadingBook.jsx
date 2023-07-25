import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { PriorityButton } from "../PriorityButton/PriorityButton";
import { PriorityIcon } from "../PriorityIcon/PriorityIcon";
import { useTranslation } from "react-i18next";

const StyledWrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    margin: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }
`;

const StyledRemoveButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #ffffff;
  border: none;
  padding: 10px 10px;
  border-radius: 100%;
  cursor: pointer;
  font-size: 8px;
  z-index: 1;

  &:hover {
    background-color: #b9b9b9;
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
`;

const StyledHoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover ${StyledHoverContent} {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  width: 200px;
  max-width: 200px;
  height: 300px;
  max-height: 300px;

  &:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const SingleReadingBook = ({ book, readingBooks, setReadingBooks }) => {
  const [priority, setPriority] = useState(book?.priority ?? 1);

  const { t } = useTranslation();

  const removeBook = () => {
    const newBooksCopy = [...readingBooks];
    const index = newBooksCopy.findIndex(
      (bookCopy) => bookCopy.book.title === book.book.title
    );
    newBooksCopy.splice(index, 1);
    setReadingBooks(newBooksCopy);
  };

  const priorityName = (priority) => {
    const priorityMap = {
      0: t("home.priority.low"),
      1: t("home.priority.medium"),
      2: t("home.priority.high"),
    };
    return priorityMap[priority];
  };

  useEffect(() => {
    const newBooksCopy = [...readingBooks];
    const index = newBooksCopy.findIndex(
      (bookCopy) => bookCopy.book.title === book.book.title
    );
    newBooksCopy[index].priority = priority;
    setReadingBooks(newBooksCopy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priority]);

  return (
    <div>
      <StyledHoverContainer>
        <StyledRemoveButton data-cy="remove-reading-book" onClick={removeBook}>
          ❌
        </StyledRemoveButton>
        <PriorityIcon priority={priority} />
        <StyledImg src={book.book.cover} alt={book.book.title} width={200} />
        <StyledHoverContent>
          <StyledWrapperButtons>
            <PriorityButton
              setPriority={setPriority}
              option="sum"
              dataCy="up-priority"
              disabledPrio={priority === 2}
              label={"➕"}
            />
            <span>{priorityName(book?.priority ?? priority)}</span>
            <PriorityButton
              setPriority={setPriority}
              option="res"
              dataCy="down-priority"
              disabledPrio={priority === 0}
              label={"➖"}
            />
          </StyledWrapperButtons>
        </StyledHoverContent>
      </StyledHoverContainer>
    </div>
  );
};

SingleReadingBook.propTypes = {
  book: PropTypes.object.isRequired,
  readingBooks: PropTypes.array.isRequired,
  setReadingBooks: PropTypes.func.isRequired,
};
