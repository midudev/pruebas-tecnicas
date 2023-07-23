import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Book } from "../models";
import { useBook } from "../zustand/useBooks";
import { getPriority, getPriorityColor } from "../utils";
import { useToast } from "../hooks/useToast";
import { useState } from "react";
import { BookModal } from "./BookModal";

interface Props {
  book: Book;
  lectureBook?: boolean;
  position?: number;
}

export const BookItem = ({ book, lectureBook, position }: Props) => {
  const { throwSuccessToast } = useToast();
  const addToLectureList = useBook((state) => state.addToLectureList);
  const removeFromLectureList = useBook((state) => state.removeFromLectureList);
  const userLectureList = useBook((state) => state.userLectureList);
  const disableBtn =
    !lectureBook &&
    userLectureList.find((storageBook) => storageBook.ISBN === book.ISBN);
  const priority = getPriority(userLectureList.length, position);
  const priorityColor: string = getPriorityColor(priority);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    if (!lectureBook) setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleClick = () => {
    if (lectureBook) {
      removeFromLectureList(book.ISBN);
      throwSuccessToast("Book have been removed");
    } else {
      addToLectureList(book);
      throwSuccessToast("Book have been added to your lecture books");
    }
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          maxWidth: 250,
          boxShadow: 2,
          border: "1px solid rgba(217,217,219,0.1)",
          cursor: "pointer",
        }}
        component="article"
      >
        <CardMedia
          component="img"
          height="300"
          image={book.cover}
          alt={book.title}
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxHeight: "fix-content",
          }}
          onClick={handleOpenModal}
        />
        <CardContent onClick={handleOpenModal}>
          <Typography gutterBottom variant="body1" component="h2">
            {book.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            fontStyle="italic"
            color="GrayText"
          >
            {book.author.name} {`(${book.year})`} {`pages: ${book.pages}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            disabled={!!disableBtn}
            onClick={handleClick}
            variant="contained"
            size="small"
            fullWidth
            color={`${lectureBook ? "error" : "primary"}`}
          >
            {lectureBook ? "Remove book" : "Add to lecture List"}
          </Button>
        </CardActions>
        <Typography
          variant="caption"
          color="GrayText"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          py={1}
        >
          {lectureBook ? (
            <Typography color="GrayText" component="p" fontSize={14}>
              Prority:{" "}
              <Typography
                component="span"
                fontWeight="bold"
                color={priorityColor}
                fontSize={14}
              >
                {priority}
              </Typography>
            </Typography>
          ) : null}
        </Typography>
      </Card>
      {openModal ? (
        <BookModal
          book={book}
          handleCloseModal={handleCloseModal}
          openModal={openModal}
        />
      ) : null}
    </>
  );
};
