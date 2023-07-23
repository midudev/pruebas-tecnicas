import { Grid } from "@mui/material";
import { SectionContainer } from ".";
import EmptyList from "./EmptyList";
import { useBook } from "../zustand/useBooks";

import { Book } from "../models";
import { ReactSortable } from "react-sortablejs";
import { adaptIdToBook } from "../adapters/book.adapter";
import { BookItem } from "./BookItem";

export interface DnDBook extends Book {
  id: string;
}
export const LectureList = () => {
  const userLectureList = useBook((state) => state.userLectureList);
  const setUserLectureList = useBook((state) => state.setUserLectureList);

  if (userLectureList.length === 0)
    return <EmptyList label="Your lecture list is empty" />;
  return (
    <SectionContainer>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        m="auto"
        width="full"
        px={3}
      >
        <ReactSortable
          list={userLectureList.map((book) => adaptIdToBook(book))}
          setList={setUserLectureList}
          direction="horizontal"
          className="card"
        >
          {userLectureList.map((book, index) => (
            <Grid item key={book.ISBN} xs={3} mb={4}>
              <BookItem book={book} lectureBook priority={index} />
            </Grid>
          ))}
        </ReactSortable>
      </Grid>
    </SectionContainer>
  );
};
