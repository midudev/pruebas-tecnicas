import { Grid } from "@mui/material";
import { SectionContainer } from ".";
import { BookItem } from "./BookItem";
import { useContext } from "react";
import { BookContext, BookContextType } from "../context/bookContext";
import EmptyList from "./EmptyList";

export const LectureList = () => {
  const { userLectureList } = useContext(BookContext) as BookContextType;

  if (userLectureList.length === 0)
    return <EmptyList label="Your lecture list is empty" />;
  return (
    <SectionContainer>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {userLectureList.map((book) => (
          <Grid item xs={3}>
            <BookItem book={book} lectureBook />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
