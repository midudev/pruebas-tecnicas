import { memo, useEffect, useMemo, useState } from "react";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLightBox } from "../LightBox/LightBoxProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

// components
const Marker = loadable(() => import("./Marker/Marker"));

function Book({ title, pages, genre, cover, year, ISBN, author }) {
  const { setLightBoxState } = useLightBox();

  const { setLibraryState, libraryState } = useLibrary();

  const { languageState } = useLanguage();

  const addToReadingList = () =>
    setLibraryState({ type: "toggle-to-reading-list", id: ISBN });

  const memoAnimation = useMemo(
    () =>
      "transition duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 opacity-0 translate-y-5",
    []
  );

  const activateLightBox = (e) => {
    // ignoring add to reading list action
    if (e && e.target.nodeName === "BUTTON") return;
    setLightBoxState({ type: "set", id: ISBN });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) addToReadingList();
  };

  const handleLightKeyDown = (e) => {
    if (e.keyCode === 13) activateLightBox();
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

    //* if the user is using a filter
    //  the genre of the book is not the filtering genre
    if (
      libraryState.filters.genre.length &&
      genre !== libraryState.filters.genre
    )
      toHide = true;
    //  the book has fewer pages than the filter per pages
    if (pages < libraryState.filters.pages) toHide = true;
    //  the book title has similarity to the filter by title
    setHide(toHide);
  }, [libraryState, ISBN, genre, pages]);

  return !hide ? (
    <li id={ISBN} className={`book ${styles.main} appear`}>
      <img
        className="w-full h-full object-cover object-center shadow-[black] shadow-md transition"
        src={cover}
        alt={`${title}-${languageState.texts.book.cover}`}
      />
      <Marker show={isInReadingList} />
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onDoubleClick={addToReadingList}
        className={`group ${styles.bookInfoContainer} ${
          isInReadingList ? "!opacity-100" : ""
        }`}
      >
        <div
          role="button"
          tabIndex={-1}
          onKeyDown={handleLightKeyDown}
          onClick={activateLightBox}
          className={`${memoAnimation} ${styles.bookInfo} !cursor-pointer hover:underline decoration-dark-alt-text`}
        >
          <h3>{title}</h3>
          <p>
            {genre}{" "}
            <span className="alter-text">
              ({pages}) {languageState.texts.book.pages}
            </span>
          </p>
          <p className="mt-2">
            <span className="alter-text">{languageState.texts.book.by}</span>{" "}
            {author.name} <span className="alter-text">({year})</span>
          </p>
        </div>
        <PrimaryButton
          name="add-to-reading-list"
          onClick={addToReadingList}
          tabIndex={-1}
          ariaLabel={
            !isInReadingList
              ? languageState.texts.ariaLabels.add
              : languageState.texts.ariaLabels.remove
          }
          className={`${memoAnimation} ${
            isInReadingList ? styles.addButton : ""
          }`}
        >
          {!isInReadingList
            ? languageState.texts.book.add
            : languageState.texts.book.remove}
        </PrimaryButton>
      </div>
    </li>
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
