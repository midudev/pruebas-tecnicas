import { useMemo } from "react";

import PropTypes from "prop-types";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLightBox } from "../LightBox/LightBoxProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// components
import Marker from "./Marker/Marker";

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

  return (
    <article onClick={activateLightBox} className="w-full relative">
      <img
        className="w-full h-full object-cover object-center shadow-[black] shadow-md transition"
        src={cover}
        alt={`${title}-${languageState.texts.book.cover}`}
      />

      <Marker show={libraryState.readingList[ISBN]} />
      <div
        role="info"
        className={`group absolute top-0 left-0 w-full h-full bg-dark-alt-bg-opacity opacity-0 transition hover:opacity-100 flex flex-col justify-between items-start p-3 ${
          libraryState.readingList[ISBN] ? "opacity-100" : ""
        }`}
      >
        <div
          className={`${memoAnimation} ${
            libraryState.readingList[ISBN] ? "opacity-100" : ""
          }`}
        >
          <p className="">{title}</p>
          <p className="text-dark-alt-text">
            {genre} ({pages}) {languageState.texts.book.pages}
          </p>
          <p className="mt-2">
            <span className="text-dark-alt-text">
              {languageState.texts.book.by}
            </span>{" "}
            {author.name} <span className="text-dark-alt-text">({year})</span>
          </p>
        </div>

        <button
          onClick={addToReadingList}
          aria-label={
            !libraryState.readingList[ISBN]
              ? languageState.texts.ariaLabels.add
              : languageState.texts.ariaLabels.remove
          }
          className={`cta ${memoAnimation}`}
        >
          {!libraryState.readingList[ISBN]
            ? languageState.texts.book.add
            : languageState.texts.book.remove}
        </button>
      </div>
    </article>
  );
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

export default Book;
