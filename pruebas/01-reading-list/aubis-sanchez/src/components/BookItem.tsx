import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Book } from "../models";
import { BookContext, BookContextType } from "../context/bookContext";
import { useContext } from "react";

interface Props {
  book: Book;
  lectureBook?: boolean;
}

export const BookItem = ({ book, lectureBook }: Props) => {
  const { addToLectureList, removeFromLectureList } = useContext(
    BookContext
  ) as BookContextType;

  return (
    <Card sx={{ maxWidth: 250 }} component="article">
      <CardMedia
        component="img"
        height="300"
        image={book.cover}
        alt={book.title}
        sx={{
          objectFit: "cover",
          maxHeight: "300",
          objectPosition: "center",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {book.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          fontStyle="italic"
          color="GrayText"
        >
          {book.author.name} {`(${book.year})`}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button
          onClick={() =>
            lectureBook
              ? removeFromLectureList(book.ISBN)
              : addToLectureList(book)
          }
          variant="contained"
          size="small"
          fullWidth
          color={`${lectureBook ? "error" : "primary"}`}
        >
          {lectureBook ? "Remove book" : "Add to lecture List"}
        </Button>
      </CardActions>
    </Card>
  );
};
