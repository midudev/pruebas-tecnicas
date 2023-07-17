import { SectionContainer } from "./SectionContainer";
import { BookItem } from "./BookItem";
import { Grid } from "@mui/material";
import { BooksGenresFilter } from "./BooksGenresFilter";

import { Book } from "../models";
import { useBook } from "../zustand/useBooks";
import { useEffect } from "react";
import { getBooksBySelectedGenres, getDefaultBooks } from "../utils";

export const Books = () => {
  const books = useBook((state) => state.books);
  const setBooks = useBook((state) => state.setBooks);
  const selectedGenres = useBook((state) => state.selectedGenres);

  useEffect(() => {
    if (selectedGenres.length === 0) return setBooks(getDefaultBooks());
    else {
      setBooks(getBooksBySelectedGenres(selectedGenres));
    }
  }, [selectedGenres, setBooks]);

  return (
    <SectionContainer>
      <BooksGenresFilter />
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {books.map((book: Book) => (
          <Grid key={book.ISBN} item xs={3}>
            <BookItem book={book} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
