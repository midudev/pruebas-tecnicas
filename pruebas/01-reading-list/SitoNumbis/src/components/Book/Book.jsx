import { memo, useEffect, useMemo, useState } from "react";
import { stringSimilarity } from "string-similarity-js";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";
import { useFilters } from "../../contexts/FiltersProvider";
import { useLightBox } from "../LightBox/LightBoxProvider";

// styles
import styles from "./styles.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LazyImage from "../LazyImage/LazyImage";

// components
const Tippy = loadable(() => import("@tippyjs/react"));

function Book({ title, pages, genre, cover, year, ISBN, author }) {
  const { filtersState } = useFilters();
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

  const [hide, setHide] = useState(false);

  useEffect(() => {
    let toHide = false;
    // if the user is seeing the reading list and the book is not in the reading list
    if (libraryState.readingList.has(ISBN)) toHide = true;

    //* if the user is using a filter
    //  the genre of the book is not the filtering genre
    if (filtersState.genre.length && genre !== filtersState.genre)
      toHide = true;
    //  the book has fewer pages than the filter per pages
    if (pages < filtersState.pages) toHide = true;
    //  the book title has similarity to the filter by title
    if (
      stringSimilarity(title, filtersState.title) < 0.2 &&
      title.toLowerCase().indexOf(filtersState.title.toLowerCase()) === -1
    )
      toHide = true;
    setHide(toHide);
  }, [filtersState, libraryState, ISBN, genre, pages, title]);

  return !hide ? (
    <li id={ISBN} className={`book ${styles.main} appear`}>
      <LazyImage
        className="w-full h-full object-cover object-center shadow-[black] shadow-md transition"
        src={cover}
        alt={`${title}-${languageState.texts.book.cover}`}
      />
      <Tippy
        content={languageState.texts.ariaLabels.seeDetails}
        className="hide-on-mobile"
      >
        <div
          role="button"
          tabIndex={0}
          aria-label={languageState.texts.ariaLabels.add}
          onKeyDown={handleKeyDown}
          onClick={activateLightBox}
          className={`group ${styles.bookInfoContainer}`}
        >
          <div className={`${memoAnimation} ${styles.bookInfo}`}>
            <h3>{title}</h3>
            <p>
              {genre}{" "}
              <span className="alter-text">
                ({pages}) {languageState.texts.book.pages}
              </span>
            </p>
            <p className="mt-2">
              <span className="alter-text">{languageState.texts.book.by}</span>{" "}
              {author?.name} <span className="alter-text">({year})</span>
            </p>
          </div>

          <PrimaryButton
            name="add-to-reading-list"
            onClick={addToReadingList}
            tabIndex={-1}
            ariaLabel={languageState.texts.ariaLabels.add}
            className={`${memoAnimation}`}
          >
            {languageState.texts.book.add}
          </PrimaryButton>
        </div>
      </Tippy>
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
