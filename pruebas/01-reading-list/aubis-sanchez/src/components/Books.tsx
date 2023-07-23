import { SectionContainer } from "./SectionContainer";
import { BookItem } from "./BookItem";
import { Card, Grid, Stack } from "@mui/material";
import { BooksGenresFilter } from "./BooksGenresFilter";
import { Book } from "../models";
import { useBook } from "../zustand/useBooks";
import { useEffect } from "react";
import { getBooksBySelectedGenres, getDefaultBooks } from "../utils";
import { SortingSelector } from "./SortingSelector";
import SearchFilter from "./SearchFilter";

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
      <Stack direction="row" gap={2} width="100%">
        <BooksGenresFilter />
        <SortingSelector />
        <SearchFilter />
      </Stack>
      <Grid container alignItems="stretch" spacing={2} m="auto">
        {books.map((book: Book) => (
          <Grid
            key={book.ISBN}
            item
            component={Card}
            display="flex"
            sx={{
              backgroundColor: "transparent",
              backgroundImage: "none",
              boxShadow: "none",
            }}
          >
            <BookItem book={book} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
