import { SectionContainer } from "./SectionContainer";
import booksData from "../../../books.json";
import { BookItem } from "./BookItem";
import { Grid } from "@mui/material";

export const Books = () => {
  return (
    <SectionContainer>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {booksData.library.map(({ book }) => (
          <Grid item xs={3}>
            <BookItem book={book} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
