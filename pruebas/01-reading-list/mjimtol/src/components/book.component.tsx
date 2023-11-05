import { BookSelectable, TABS } from "../types.d";

interface BookProps {
  book: BookSelectable;
  setSelected: (libros: BookSelectable[]) => void;
  seleccionados: BookSelectable[];
  zona: string;
  addToList: (libro: BookSelectable) => void;
  removeFromList: (libro: BookSelectable) => void;
  addPriority?: (libro: BookSelectable) => void;
  reducePriority?: (libro: BookSelectable) => void;
}

export const BookComponent = (props: BookProps) => {
  const { book } = props;

  const isSelected = () => {
    if (props.zona === TABS.Libreria && book.selected) return "selected";
    return "";
  };

  const handleClick = () => {
    const libros = [...props.seleccionados];
    const index = libros.findIndex(
      (libro: BookSelectable) => libro.ISBN === book.ISBN
    );
    if (props.zona === TABS.Libreria) {
      if (index < 0) props.addToList(book);
    } else {
      if (index >= 0) props.removeFromList(book);
    }
  };

  const addPrio = () => props.addPriority && props.addPriority(book);
  const reducePrio = () => props.reducePriority && props.reducePriority(book);

  return (
    <>
      <article className={`bookCard ${isSelected()}`}>
        <div onClick={handleClick}>
          <header>{book.title}</header>
          <img src={book.cover} className={`bookCover`} />
          {/* {book} */}
        </div>
        {props.zona === TABS.Lectura && (
          <footer>
            <button onClick={addPrio}>{`<`}</button>
            <button onClick={reducePrio}>{`>`}</button>
          </footer>
        )}
      </article>
    </>
  );
};
