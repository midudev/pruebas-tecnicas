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
  const { libraryState } = useLibrary();

  const { languageState } = useLanguage();

  const bookToPrints = useMemo(() => {
    return libraryState.books;
  }, [libraryState.books]);

  const [totalLength, setTotalLength] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const visibleBooks = document.querySelectorAll(".book");
      setTotalLength(visibleBooks.length);
    }, 300);
  }, [libraryState]);

  return (
    <main className={styles.main}>
      <Suspense
        fallback={<Loading className="w-full h-full top-0 left-0 fixed z-50" />}
      >
        <FilterBar />
        <div className="flex items-center justify-between w-full">
          <p>
            {languageState.texts.seeing.title}{" "}
            {languageState.texts.seeing[libraryState.seeing]}
            <span className="text-dark-alt-text text-sm mx-2">
              (
              {libraryState.filtering && libraryState.filtering.length
                ? libraryState.filtering
                : languageState.texts.seeing.noFilter}
              )
            </span>
            <span className="text-dark-alt-text text-sm">({totalLength})</span>
          </p>
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
