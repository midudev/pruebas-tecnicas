import classes from "./Header.module.css";

function Header(props) {
  console.log(props.books);
  const text =
    props.books !== undefined &&
    props.books !== null &&
    props.books.filter((book) => book.book.wish).length > 0
      ? "Con libros de lectura "
      : "Sin libros de lectura";
  return (
    <header>
      <div>{text}</div>
    </header>
  );
}

export default Header;
