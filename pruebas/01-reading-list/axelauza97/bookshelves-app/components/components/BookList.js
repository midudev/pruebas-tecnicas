import classes from "./BookList.module.css";
import Image from "next/image";

function BookList(props) {
  const clickHandler = (book) => {
    props.moveList(book);
  };
  return (
    <div className={classes.bookList}>
      {/*Disponibles*/}
      {props.type !== "wish" &&
        props.books != null &&
        props.books != undefined &&
        props.books.map(
          (bookE, i) =>
            !bookE.book.wish && (
              <div
                key={i}
                className={classes.bookCard}
                onClick={() => clickHandler(bookE.book)}
              >
                <Image
                  className={classes.image}
                  width={500}
                  height={600}
                  src={bookE.book.cover}
                  alt=""
                />
              </div>
            )
        )}
      {props.type === "wish" &&
        props.books != null &&
        props.books != undefined &&
        props.books.map(
          (bookE, i) =>
            bookE.book.wish && (
              <div
                key={i}
                className={classes.bookCard}
                onClick={() => clickHandler(bookE.book)}
              >
                <Image
                  className={classes.image}
                  width={500}
                  height={600}
                  src={bookE.book.cover}
                  alt=""
                />
              </div>
            )
        )}
    </div>
  );
}

export default BookList;
