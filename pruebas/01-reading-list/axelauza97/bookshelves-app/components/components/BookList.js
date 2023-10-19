import classes from "./BookList.module.css";
import Image from "next/image";

function BookList(props) {
  const clickHandler = (book) => {
    props.moveList(book);
  };
  return (
    <div className={`${classes.bookList} ${props.className}`}>
      {/*Disponibles*/}
      {props.type !== "wish" &&
        props.books != null &&
        props.books !== undefined &&
        props.books.map(
          (bookE, i) =>
            bookE.book.visible && (
              <div
                key={i}
                className={`${bookE.book.wish ? classes.darken : null}`}
                onClick={() => clickHandler(bookE.book)}
              >
                <Image
                  className={classes.image}
                  width={500}
                  height={600}
                  src={bookE.book.cover}
                  alt={bookE.book.title}
                />
                <h1 className={classes.title}>{bookE.book.title}</h1>
                <p className={classes.synopsis}>{bookE.book.synopsis}</p>
              </div>
            )
        )}
      {props.type === "wish" &&
        props.books != null &&
        props.books !== undefined &&
        props.books.map(
          (bookE, i) =>
            bookE.book.visible &&
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
                  alt={bookE.book.title}
                />
                <h1 className={classes.title}>{bookE.book.title}</h1>
                <p className={classes.synopsis}>{bookE.book.synopsis}</p>
              </div>
            )
        )}
    </div>
  );
}

export default BookList;
