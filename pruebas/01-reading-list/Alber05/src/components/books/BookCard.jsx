import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import style from "./bookCard.module.css";
import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkHeartFill,
} from "react-icons/bs";

export const BookCard = ({ added, booksToDisplay }) => {
  const { handleAddToLibrary, handleDeleteFromLibrary } =
    useContext(DataContext);

  return (
    <>
      {booksToDisplay?.map((libro) => (
        <article key={libro.book.ISBN} className={style.bookCard}>
          <header className={style.cardHeader}>
            <img src={libro.book.cover} alt="Book Cover" />
            <div className={style.synopsis}>
              <h2 className={style.genre}>{libro.book.genre} </h2>
              <div className={style.cardBody}>
                <h3>Sinopsis:</h3>
                <p>{libro.book.synopsis}</p>
              </div>
            </div>
          </header>
          <footer className={style.cardFooter}>
            <h3 className={style.footerH3} title={libro.book.title}>
              {libro.book.title}
            </h3>
            <small className={style.footerSmall}>
              Autor:{" "}
              <span className={style.smallSpan}>{libro.book.author.name}</span>
            </small>
            <small className={style.footerSmall}>
              Año: <span className={style.smallSpan}>{libro.book.year}</span>
            </small>
            {added ? (
              <small
                className={style.footerHandleLibrary}
                onClick={() => handleDeleteFromLibrary(libro.book.ISBN)}
              >
                <BsFillBookmarkHeartFill />
                Eliminar de la biblioteca
              </small>
            ) : (
              <small
                className={style.footerHandleLibrary}
                onClick={() => handleAddToLibrary(libro.book.ISBN)}
              >
                <BsFillBookmarkPlusFill /> Añadir a la biblioteca
              </small>
            )}
          </footer>
        </article>
      ))}
    </>
  );
};
