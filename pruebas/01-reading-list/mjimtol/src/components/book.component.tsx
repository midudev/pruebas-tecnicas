import { BookSelectable } from "../types.d";

interface BookProps {
  book: BookSelectable;
  setSelected: (libros: BookSelectable[]) => void;
  seleccionados: BookSelectable[];
  zona: string;
  addToList: (libro: BookSelectable) => void;
  removeFromList: (libro: BookSelectable) => void;
}

export const BookComponent = (props: BookProps) => {
  const { book } = props;

  const isSelected = () => {
    if (props.zona === "estanteria" && book.selected) return "selected";
    return "";
  };

  const handleClick = () => {
    const libros = [...props.seleccionados];
    const index = libros.findIndex(
      (libro: BookSelectable) => libro.ISBN === book.ISBN
    );
    if (props.zona === "estanteria") {
      if (index < 0) props.addToList(book);
    } else {
      if (index >= 0) props.removeFromList(book);
    }
  };

  return (
    <>
      <article className={`bookCard ${isSelected()}`} onClick={handleClick}>
        <header>{book.title}</header>
        <img src={book.cover} className={`bookCover`} />
      </article>
    </>
  );
};
