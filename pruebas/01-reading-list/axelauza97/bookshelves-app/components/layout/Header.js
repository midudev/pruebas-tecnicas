import classes from "./Header.module.css";

function Header(props) {
  const text =
    props.books !== undefined &&
    props.books !== null &&
    props.books.filter((book) => book.book.visible && book.book.wish).length > 0
      ? "Con libros de lectura "
      : "Sin libros de lectura";
  return (
    <header>
      <h3>{text}</h3>
    </header>
  );
}

export default Header;
