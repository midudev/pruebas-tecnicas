import { useState } from "react";

import BOOKS from "../../utils/books.json";
import { styled } from "styled-components";

import { AvaliableBooksContainer } from "../../components/AvaliableBooksContainer/AvaliableBooksContainer";
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
`;

export const Home = () => {
  const originalBooks = BOOKS.library;
  const [avaliableBooks, setAvaliableBooks] = useState(originalBooks || []);
  const [readingBooks, setReadingBooks] = useLocalStorage("newBooks", []);

  return (
    <div>
      <Header />
      <ChangeLanguage />
      <FilterContainer
        originalBooks={originalBooks}
        readingBooks={readingBooks}
        avaliableBooks={avaliableBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
      <StyleBooksContainer>
        <AvaliableBooksContainer
          avaliableBooks={avaliableBooks}
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
