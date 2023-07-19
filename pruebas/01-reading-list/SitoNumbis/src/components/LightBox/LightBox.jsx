import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faInfo } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";
import { useLightBox } from "./LightBoxProvider";

// components
import IconButton from "../IconButton/IconButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

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

  const closeLightBox = useCallback(() => {
    setLightBoxState({ type: "remove" });
  }, [setLightBoxState]);

  return createPortal(
    <section
      className={`${styles.main} ${
        lightBoxState.id
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <IconButton
        name="close-dialog"
        icon={faClose}
        ariaLabel={languageState.texts.ariaLabels.closeDialog}
        onClick={closeLightBox}
        className={`${styles.closeButton}`}
      />
      <article className={styles.book}>
        <img
          src={selectedBook.cover}
          alt={`${selectedBook.title}-${languageState.texts.book.cover}`}
          className={styles.cover}
        />
        <div className={`${styles.info} ${seeingCover ? "!opacity-0" : ""}`}>
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
            <Fragment>
              <p>{languageState.texts.book.otherBooks}</p>
              <div className="flex gap-5">{otherBooks}</div>
            </Fragment>
          ) : null}
        </div>
        {seeingCover ? (
          <button
            name="hide-cover"
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
