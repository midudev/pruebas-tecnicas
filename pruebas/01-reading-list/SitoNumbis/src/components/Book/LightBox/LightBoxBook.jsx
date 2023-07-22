import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { faInfo } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";
import { useLightBox } from "../../LightBox/LightBoxProvider";
import { useLibrary } from "../../../contexts/LibraryProvider";

// components
import LazyImage from "../../LazyImage/LazyImage";
import IconButton from "../../IconButton/IconButton";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

// styles
import styles from "./styles.module.css";

function LightBoxBook({ title, pages, genre, cover, year, author, synopsis }) {
  const { languageState } = useLanguage();

  const { lightBoxState } = useLightBox();
  const { libraryState, setLibraryState } = useLibrary();

  useEffect(() => {
    if (!lightBoxState.id) setSeeingCover(false);
  }, [lightBoxState]);

  const addToReadingList = useCallback(
    (e) => {
      e.preventDefault();
      setLibraryState({ type: "toggle-to-reading-list", id: lightBoxState.id });
    },
    [lightBoxState, setLibraryState]
  );

  const [seeingCover, setSeeingCover] = useState(false);

  const isInReadingList = useMemo(() => {
    return libraryState.readingList.has(lightBoxState.id);
  }, [libraryState, lightBoxState]);

  const otherBooks = useMemo(() => {
    if (author) {
      const authorOtherBooks = [];
      Object.values(libraryState.books).filter((book) => {
        const found = author.otherBooks.find(
          (otherBook) => otherBook === book.title
        );
        if (found) authorOtherBooks.push(book);
      });
      return authorOtherBooks;
    }
  }, [author, libraryState]);

  return (
    <article className={styles.book}>
      <LazyImage
        src={cover}
        alt={`${title}-${languageState.texts.book.cover}`}
        className={styles.cover}
      />
      <div
        className={`${styles.infoContainer} ${seeingCover ? "!opacity-0" : ""}`}
      >
        <div className={styles.info}>
          <h3 className="text-2xl">{title}</h3>
          <p>
            {genre}{" "}
            <span className="alter-text">
              ({pages}) {languageState.texts.book.pages}
            </span>
          </p>
          <p>
            <span className="alter-text">{languageState.texts.book.by}</span>{" "}
            {author?.name} <span className="alter-text">({year})</span>
          </p>
          <p className={styles.synopsis}>{synopsis}</p>
          <div className="flex items-center gap-4 mt-5">
            <PrimaryButton
              name="add-to-reading-list"
              onClick={addToReadingList}
              ariaLabel={
                !isInReadingList
                  ? languageState.texts.ariaLabels.add
                  : languageState.texts.ariaLabels.remove
              }
            >
              {!isInReadingList
                ? languageState.texts.book.add
                : languageState.texts.book.remove}
            </PrimaryButton>
            <button
              name="show-cover"
              onClick={() => setSeeingCover((seeingCover) => !seeingCover)}
              className={`${styles.seeCoverButton} secondary`}
            >
              {languageState.texts.book.seeCover}
            </button>
          </div>
          {otherBooks?.length ? (
            <div className={styles.otherBooks}>
              <p className="alter-text mt-3">
                {languageState.texts.book.otherBooks}
              </p>
              <ul className="flex gap-5 flex-wrap">
                {otherBooks.slice(0, 4).map((book) => (
                  <li key={book.ISBN} className="whitespace-nowrap">
                    <Link className="hover:underline" to={`/?id=${book.ISBN}`}>
                      {book.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      {seeingCover ? (
        <IconButton
          icon={faInfo}
          name="hide-cover"
          className={`appear button ${styles.infoButton}`}
          ariaLabel={languageState.texts.ariaLabels.showDetails}
          onClick={() => setSeeingCover((seeingCover) => !seeingCover)}
        />
      ) : null}
    </article>
  );
}

LightBoxBook.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.number,
  genre: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  synopsis: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    otherBooks: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default LightBoxBook;
