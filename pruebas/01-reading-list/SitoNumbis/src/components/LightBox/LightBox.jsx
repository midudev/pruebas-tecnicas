import { useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLightBox } from "./LightBoxProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

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

  const selectedBook = useMemo(() => {
    const find = libraryState.books.find(
      (book) => book.ISBN === lightBoxState.id
    );
    return find || {};
  }, [lightBoxState, libraryState]);

  const otherBooks = useMemo(() => {
    if (selectedBook.author) {
      const authorOtherBooks = libraryState.books.filter((book) =>
        selectedBook.author.otherBooks.find(
          (otherBook) => otherBook === book.title
        )
      );
      console.log(authorOtherBooks);
    }
  }, [selectedBook, libraryState]);

  return createPortal(
    <section
      className={`grid transition duration-300 fixed z-20 top-0 left-0 bg-dark-alt-bg-opacity backdrop-blur-xl w-full h-screen ${
        lightBoxState.id
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <article className="flex items-center justify-center gap-10">
        <img
          src={selectedBook.cover}
          alt={`${selectedBook.title}-${languageState.texts.book.cover}`}
          className="h-[350px] w-[250px]"
        />
        <div role="info" className="flex flex-col items-start justify-start">
          <h3 className="text-2xl">{selectedBook.title}</h3>
          <p>
            {selectedBook.genre}{" "}
            <span className="text-dark-alt-text">({selectedBook.pages})</span>
          </p>
          <p>
            {selectedBook.author?.name}{" "}
            <span className="text-dark-alt-text">({selectedBook.year})</span>
          </p>
          <p className="text-dark-alt-text">{selectedBook.synopsis}</p>
          <div className="flex gap-5">{otherBooks}</div>
        </div>
      </article>
    </section>,
    document.body
  );
}

export default LightBox;
