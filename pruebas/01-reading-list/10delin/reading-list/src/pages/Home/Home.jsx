import { useState } from "react";

import BOOKS from "../../utils/books.json";
import { styled } from "styled-components";

import { AvailableBooksContainer } from "../../components/AvailableBooksContainer/AvailableBooksContainer";
import { ReadingBooksContainer } from "../../components/ReadingBooksContainer/ReadingBooksContainer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Header } from "../../components/Header/Header";
import { FilterContainer } from "../../components/FilterContainer/FilterContainer";
import { ChangeLanguage } from "../../components/ChangeLanguage/ChangeLanguage";

const StyleBooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 1rem;
  padding-right: ${({ $readingBooks }) =>
    $readingBooks.length > 0 ? "calc(250px + 50px)" : "0rem"};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-right: 0rem;
    padding-bottom: ${({ $readingBooks }) =>
      $readingBooks.length > 0 ? "calc(250px + 50px)" : "0rem"};
  }
`;

export const Home = () => {
  const originalBooks = BOOKS.library;
  const [availableBooks, setAvailableBooks] = useState(originalBooks || []);
  const [readingBooks, setReadingBooks] = useLocalStorage("newBooks", []);

  return (
    <div>
      <Header />
      <ChangeLanguage />
      <FilterContainer
        originalBooks={originalBooks}
        readingBooks={readingBooks}
        availableBooks={availableBooks}
        setAvailableBooks={setAvailableBooks}
      />
      <StyleBooksContainer $readingBooks={readingBooks}>
        <AvailableBooksContainer
          availableBooks={availableBooks}
          readingBooks={readingBooks}
          setReadingBooks={setReadingBooks}
        />
        <ReadingBooksContainer
          readingBooks={readingBooks}
          setReadingBooks={setReadingBooks}
        />
      </StyleBooksContainer>
    </div>
  );
};
