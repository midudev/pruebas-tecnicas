import { Suspense, useMemo } from "react";
import loadable from "@loadable/component";

// components
import Book from "../components/Book/Book";
import ToTop from "../components/ToTop/ToTop";
import FilterBar from "../components/FilterBar/FilterBar";

// contexts
import { LightBoxProvider } from "../components/LightBox/LightBoxProvider";
import { useLanguage } from "../contexts/LanguageProvider";
import { useLibrary } from "../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";
import { css } from "@emotion/css";

// suspended
const LightBox = loadable(() => import("../components/LightBox/LightBox"));

function Home() {
  const { libraryState } = useLibrary();

  const { languageState } = useLanguage();

  const bookToPrints = useMemo(() => {
    return libraryState.books;
  }, [libraryState.books]);

  return (
    <main className={styles.main}>
      <Suspense>
        <div
          className={`grid ${css({
            gridTemplateRows:
              libraryState.seeing === "reading-list" ? "1fr" : "0fr",
            transition: "grid-template-rows 500ms ease",
          })}`}
        >
          <div className="overflow-hidden">
            <h3 className="text-xl">{languageState.texts.home.readingList}</h3>
          </div>
        </div>
        <FilterBar />
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
