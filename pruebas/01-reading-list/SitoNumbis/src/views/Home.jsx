import { Suspense } from "react";
import loadable from "@loadable/component";

// components
import Book from "../components/Book/Book";
import ToTop from "../components/ToTop/ToTop";
import FilterBar from "../components/FilterBar/FilterBar";

// contexts
import { LightBoxProvider } from "../components/LightBox/LightBoxProvider";
import { useLibrary } from "../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

// suspended
const LightBox = loadable(() => import("../components/LightBox/LightBox"));

function Home() {
  const { libraryState } = useLibrary();

  console.log(libraryState);

  return (
    <main className={styles.main}>
      <Suspense>
        <FilterBar />
        <LightBoxProvider>
          <LightBox />
          <section>
            <div className={styles.bookGrid}>
              {libraryState.books
                .filter((book) => {
                  if (libraryState.filtering)
                    return book.genre === libraryState.filtering;
                  return true;
                })
                .map((book) => (
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
