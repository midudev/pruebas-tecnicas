import { Card, Grid } from "@mui/material";
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
      <Grid container alignItems="stretch" spacing={2} m="auto" width="100%">
        <ReactSortable
          list={userLectureList.map((book) => adaptIdToBook(book))}
          setList={setUserLectureList}
          direction="horizontal"
          className="card"
        >
          {userLectureList.map((book, index) => (
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
              <BookItem book={book} lectureBook position={index} />
            </Grid>
          ))}
        </ReactSortable>
      </Grid>
    </SectionContainer>
  );
};
