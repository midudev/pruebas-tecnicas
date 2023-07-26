import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import {
  BsFillBookmarkPlusFill,
  BsFillBookmarkHeartFill,
} from "react-icons/bs";
import style from "./bookCard.module.css";

export const BookCard = ({ added, booksToDisplay }) => {
  const { handleAddToLibrary, handleDeleteFromLibrary } =
    useContext(DataContext);

  return (
    <>
      {booksToDisplay?.map((el) => (
        <article key={el.book.ISBN} className={style.bookCard}>
          <header className={style.cardHeader}>
            <img src={el.book.cover} alt={`Cover of ${el.book.title}`} />
            <div className={style.synopsis}>
              <h2 className={style.genre}>{el.book.genre} </h2>
              <div className={style.cardBody}>
                <h3>Sinopsis:</h3>
                <p>{el.book.synopsis}</p>
              </div>
            </div>
          </header>
          <footer className={style.cardFooter}>
            <h3 className={style.footerH3} title={el.book.title}>
              {el.book.title}
            </h3>
            <small className={style.footerSmall}>
              Autor:{" "}
              <span className={style.smallSpan}>{el.book.author.name}</span>
            </small>
            <small className={style.footerSmall}>
              Año: <span className={style.smallSpan}>{el.book.year}</span>
            </small>
            {added ? (
              <small
                className={style.footerHandleLibrary}
                onClick={() => handleDeleteFromLibrary(el.book.ISBN)}
              >
                <BsFillBookmarkHeartFill />
                Eliminar de la biblioteca
              </small>
            ) : (
              <small
                className={style.footerHandleLibrary}
                onClick={() => handleAddToLibrary(el.book.ISBN)}
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
