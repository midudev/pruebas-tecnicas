import classes from "./Book.module.css";
import Image from "next/image";

function Book(props) {
  return (
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
  );
}

export default Book;
