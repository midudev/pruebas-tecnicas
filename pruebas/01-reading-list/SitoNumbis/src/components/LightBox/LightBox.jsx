import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faInfo } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLightBox } from "./LightBoxProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

function LightBox() {
  const { languageState } = useLanguage();

  const { lightBoxState, setLightBoxState } = useLightBox();
  const { libraryState, setLibraryState } = useLibrary();

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") setLightBoxState({ type: "remove" });
    },
    [setLightBoxState]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    if (lightBoxState.id) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "auto";
      setSeeingCover(false);
    }
  }, [lightBoxState]);

  const selectedBook = useMemo(() => {
    const find = libraryState.books.find(
      (book) => book.ISBN === lightBoxState.id
    );
    return find || {};
  }, [lightBoxState, libraryState]);

  const otherBooks = useMemo(() => {
    if (selectedBook.author) {
      const authorOtherBooks = libraryState.books.filter((book) => {
        selectedBook.author.otherBooks.find((otherBook) => {
          return otherBook === book.title;
        });
      });
      return authorOtherBooks;
    }
  }, [selectedBook, libraryState]);

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

  return createPortal(
    <section
      className={`${styles.main} ${
        lightBoxState.id
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setLightBoxState({ type: "remove" })}
        className={`${styles.closeButton} icon-button`}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <article className={styles.book}>
        <img
          src={selectedBook.cover}
          alt={`${selectedBook.title}-${languageState.texts.book.cover}`}
          className={styles.cover}
        />
        <div
          role="info"
          className={`${styles.info} ${seeingCover ? "!opacity-0" : ""}`}
        >
          <h3 className="text-2xl">{selectedBook.title}</h3>
          <p>
            {selectedBook.genre}{" "}
            <span className="alter-text">
              ({selectedBook.pages}) {languageState.texts.book.pages}
            </span>
          </p>
          <p>
            <span className="alter-text">{languageState.texts.book.by}</span>{" "}
            {selectedBook.author?.name}{" "}
            <span className="alter-text">({selectedBook.year})</span>
          </p>
          <p className={styles.synopsis}>{selectedBook.synopsis}</p>
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={addToReadingList}
              aria-label={
                !isInReadingList
                  ? languageState.texts.ariaLabels.add
                  : languageState.texts.ariaLabels.remove
              }
              className={`cta`}
            >
              {!isInReadingList
                ? languageState.texts.book.add
                : languageState.texts.book.remove}
            </button>
            <button
              onClick={() => setSeeingCover((seeingCover) => !seeingCover)}
              className={`${styles.seeCoverButton} secondary`}
            >
              {languageState.texts.book.seeCover}
            </button>
          </div>
          {otherBooks?.length ? (
            <>
              <p>{languageState.texts.book.otherBooks}</p>
              <div className="flex gap-5">{otherBooks}</div>
            </>
          ) : null}
        </div>
        {seeingCover ? (
          <button
            onClick={() => setSeeingCover((seeingCover) => !seeingCover)}
            className="appear button bg-primary-dark-opacity hover:bg-dark-text w-10 h-10 rounded-full absolute z-20 top-1 left-1"
          >
            <FontAwesomeIcon icon={faInfo} />
          </button>
        ) : null}
      </article>
    </section>,
    document.body
  );
}

export default LightBox;
