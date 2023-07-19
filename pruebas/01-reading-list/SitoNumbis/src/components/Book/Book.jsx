import { memo, useEffect, useMemo, useState } from "react";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLightBox } from "../LightBox/LightBoxProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

// components
const Marker = loadable(() => import("./Marker/Marker"));

function Book({ title, pages, genre, cover, year, ISBN, author }) {
  const { setLightBoxState } = useLightBox();

  const { setLibraryState, libraryState } = useLibrary();

  const { languageState } = useLanguage();

  const addToReadingList = (e) => {
    e.preventDefault();
    setLibraryState({ type: "toggle-to-reading-list", id: ISBN });
  };

  const memoAnimation = useMemo(
    () =>
      "transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-5",
    []
  );

  const activateLightBox = (e) => {
    // ignoring add to reading list action
    if (e.target.nodeName === "BUTTON") return;
    setLightBoxState({ type: "set", id: ISBN });
  };

  const [hide, setHide] = useState(false);

  const isInReadingList = useMemo(() => {
    return libraryState.readingList.has(ISBN);
  }, [libraryState, ISBN]);

  useEffect(() => {
    let toHide = false;
    // if the user is seeing the reading list and the book is not in the reading list
    if (
      libraryState.seeing === "reading-list" &&
      !libraryState.readingList.has(ISBN)
    )
      toHide = true;

    // if the user is using a filter and the genre of the book is not the filtering genre
    if (libraryState.filtering && !toHide && genre !== libraryState.filtering)
      toHide = true;
    setHide(toHide);
  }, [libraryState]);

  return !hide ? (
    <article
      id={ISBN}
      onClick={activateLightBox}
      className={`book ${styles.main} appear`}
    >
      <img
        className="w-full h-full object-cover object-center shadow-[black] shadow-md transition"
        src={cover}
        alt={`${title}-${languageState.texts.book.cover}`}
      />
      <Marker show={isInReadingList} />
      <div
        role="info"
        className={`group ${styles.bookInfoContainer} ${
          isInReadingList ? "!opacity-100" : ""
        }`}
      >
        <div className={`${memoAnimation} ${styles.bookInfo}`}>
          <p className="">{title}</p>
          <p className="alter-text">
            {genre} ({pages}) {languageState.texts.book.pages}
          </p>
          <p className="mt-2">
            <span className="alter-text">{languageState.texts.book.by}</span>{" "}
            {author.name} <span className="alter-text">({year})</span>
          </p>
        </div>

        <button
          onClick={addToReadingList}
          aria-label={
            !isInReadingList
              ? languageState.texts.ariaLabels.add
              : languageState.texts.ariaLabels.remove
          }
          className={`cta ${memoAnimation} ${
            isInReadingList ? styles.addButton : ""
          }`}
        >
          {!isInReadingList
            ? languageState.texts.book.add
            : languageState.texts.book.remove}
        </button>
      </div>
    </article>
  ) : null;
}

Book.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.number,
  genre: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  ISBN: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    otherBooks: PropTypes.arrayOf(PropTypes.string),
  }),
};

const BookMemo = memo((props) => <Book {...props} />, arePropsEqual);
BookMemo.displayName = "Book";

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.title === newProps.title &&
    oldProps.pages === newProps.pages &&
    oldProps.genre === newProps.genre &&
    oldProps.cover === newProps.cover &&
    oldProps.year === newProps.year &&
    oldProps.ISBN === newProps.ISBN &&
    oldProps.author === newProps.author
  );
}

export default BookMemo;
