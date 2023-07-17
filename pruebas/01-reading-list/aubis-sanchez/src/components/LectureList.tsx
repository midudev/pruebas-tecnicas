import { Grid } from "@mui/material";
import { SectionContainer } from ".";
import { BookItem } from "./BookItem";
import EmptyList from "./EmptyList";
import { useBook } from "../zustand/useBooks";

export const LectureList = () => {
  const userLectureList = useBook((state) => state.userLectureList);

  if (userLectureList.length === 0)
    return <EmptyList label="Your lecture list is empty" />;
  return (
    <SectionContainer>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {userLectureList.map((book) => (
          <Grid key={book.ISBN} item xs={3}>
            <BookItem book={book} lectureBook />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
