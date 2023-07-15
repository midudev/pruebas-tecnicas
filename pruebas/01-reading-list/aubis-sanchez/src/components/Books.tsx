import { SectionContainer } from "./SectionContainer";
import { BookItem } from "./BookItem";
import { Grid } from "@mui/material";
import { BooksGenresFilter } from "./BooksGenresFilter";
import { BookContext, BookContextType } from "../context/bookContext";
import { useContext } from "react";
import { Book } from "../models";

export const Books = () => {
  const { books } = useContext(BookContext) as BookContextType;
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
