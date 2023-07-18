import { Suspense, useState, useEffect, useMemo } from "react";
import loadable from "@loadable/component";

// components
import Loading from "../components/Loading/Loading";
import FilterBar from "../components/FilterBar/FilterBar";

// contexts
import { LightBoxProvider } from "../components/LightBox/LightBoxProvider";
import { useLanguage } from "../contexts/LanguageProvider";
import { useLibrary } from "../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

// suspended
const Book = loadable(() => import("../components/Book/Book"));
const ToTop = loadable(() => import("../components/ToTop/ToTop"));
const LightBox = loadable(() => import("../components/LightBox/LightBox"));

function Home() {
  const { libraryState, setLibraryState } = useLibrary();

  const { languageState } = useLanguage();

  const bookToPrints = useMemo(() => {
    return libraryState.books;
  }, [libraryState.books]);

  const totalLength = useMemo(() => {
    return libraryState.seeing === "all"
      ? libraryState.available
      : libraryState.readingList.size;
  }, [libraryState.seeing, libraryState.books]);

  // get the current showing items
  useEffect(() => {
    // milliseconds for the dom
    setTimeout(() => {
      setLibraryState({
        type: "set-showing",
        showing: document.querySelectorAll(".book").length,
      });
    }, 100);
  }, [libraryState.filtering, libraryState.seeing]);

  return (
    <main className={styles.main}>
      <Suspense
        fallback={<Loading className="w-full h-full top-0 left-0 fixed z-50" />}
      >
        <FilterBar />
        <div className="flex items-center flex-wrap w-full">
          {/* current list total */}
          <p>
            {languageState.texts.seeing.title}{" "}
            {languageState.texts.seeing[libraryState.seeing]}
            <span className="alter-text text-sm mx-2">({totalLength})</span>
          </p>
          {/* If the user is using the genre filter */}
          {libraryState.filtering.length ? (
            <p>
              {">"} {libraryState.filtering}{" "}
              <span className="alter-text text-sm mx-1">
                ({libraryState.showing})
              </span>
            </p>
          ) : null}
        </div>
        <LightBoxProvider>
          <LightBox />
          <section>
            <div className={styles.bookGrid}>
              {bookToPrints.map((book) => (
                <Book key={book.ISBN} {...book} />
              ))}
            </div>
          </section>
        </LightBoxProvider>
        <ToTop />
      </Suspense>
    </main>
  );
}

export default Home;
