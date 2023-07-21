import { memo, useCallback, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import { css } from "@emotion/css";

import PropTypes from "prop-types";

// components
import IconButton from "../IconButton/IconButton";
import LazyImage from "../LazyImage/LazyImage";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

function Book({ title, pages, genre, cover, year, ISBN, author, i }) {
  const { languageState } = useLanguage();
  const { setLibraryState } = useLibrary();

  const [focused, setFocused] = useState(false);

  const ref = useOnclickOutside(() => {
    setFocused(false);
  });

  const removeFromReadingList = useCallback(() => {
    setLibraryState({ type: "toggle-to-reading-list", id: ISBN });
  }, [setLibraryState, ISBN]);

  return (
    <li
      ref={ref}
      id={ISBN}
      className={`${styles.side} group ${styles.main} ${
        focused ? "!z-[999]" : ""
      } hover:-translate-y-4 transition appear w-full ${css({
        gridArea: `${i + 1} / 1 / span 6 / span 1`,
        zIndex: i + 1,
      })}`}
    >
      <LazyImage
        className="w-full h-full object-cover object-center transition"
        src={cover}
        alt={`${title}-${languageState.texts.book.cover}`}
      />
      <IconButton
        name="remove-from-reading-list"
        onClick={removeFromReadingList}
        ariLabel={languageState.texts.ariaLabels.remove}
        className="bg-primary-light-opacity absolute top-1 right-1 z-10"
        icon={faClose}
      />
      <div
        tabIndex={0}
        role="button"
        onKeyDown={() => {}}
        onClick={() => setFocused((focused) => !focused)}
        onMouseLeave={() => setFocused(false)}
        className={`absolute top-0 left-0 p-5 flex flex-col h-full justify-between transition group-hover:bg-dark-alt-bg-opacity ${
          focused ? "bg-dark-alt-bg-opacity opacity-100" : ""
        } opacity-0 group-hover:opacity-100 w-full h-full`}
      >
        <div>
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
      </div>
    </li>
  );
}

Book.propTypes = {
  i: PropTypes.number,
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
    oldProps.i === newProps.i &&
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
