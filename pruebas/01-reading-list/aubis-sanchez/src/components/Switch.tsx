import { Box, Button, Slide } from "@mui/material";
import { Views } from "../models";
import { BookContext, BookContextType } from "../context/bookContext";
import { useContext, useEffect, useState } from "react";

interface Props {
  sectionOnView: Views;
  setSectionOnView: React.Dispatch<React.SetStateAction<Views>>;
}

export const Switch = ({ sectionOnView, setSectionOnView }: Props) => {
  const { userLectureList, books } = useContext(BookContext) as BookContextType;
  const [availableBooksAmount, setAvailableBooksAmount] = useState(
    books.length
  );

  useEffect(() => {
    const availableBooks = books.filter(
      (book) =>
        !userLectureList.some((lectureBook) => book.ISBN === lectureBook.ISBN)
    ).length;
    setAvailableBooksAmount(availableBooks);
  }, [books, userLectureList]);

  return (
    <Box component="div" display="flex" flexDirection="row" width="100%">
      <Button
        onClick={() => setSectionOnView(Views.books)}
        sx={{
          width: "50%",
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
          textAlign: "right",
          transitionDuration: 300,
          color: sectionOnView === Views.books ? "white" : "primary",
          bgcolor: sectionOnView === Views.books ? "rgba(38,91,167,1)" : "",
        }}
      >
        Available books {`(${availableBooksAmount})`}
      </Button>
      <Button
        onClick={() => setSectionOnView(Views.list)}
        sx={{
          width: "50%",
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          transitionDuration: 300,
          color: sectionOnView === Views.list ? "white" : "primary",
          bgcolor: sectionOnView === Views.list ? "rgba(38,91,167,1)" : "",
        }}
      >
        Lecture list {`(${userLectureList.length})`}
      </Button>
    </Box>
  );
};
