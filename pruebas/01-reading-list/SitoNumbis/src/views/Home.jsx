import { Suspense, useMemo } from "react";
import loadable from "@loadable/component";

// components
import HomeHeader from "./HomeHeader";
import Loading from "../components/Loading/Loading";
import FilterBar from "../components/FilterBar/FilterBar";

// contexts
import { LightBoxProvider } from "../components/LightBox/LightBoxProvider";
import { useLibrary } from "../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

// suspended
const Book = loadable(() => import("../components/Book/Book"));
const ToTop = loadable(() => import("../components/ToTop/ToTop"));
const LightBox = loadable(() => import("../components/LightBox/LightBox"));

function Home() {
  const { libraryState } = useLibrary();

  const bookToPrints = useMemo(() => {
    return libraryState.books;
  }, [libraryState.books]);

  return (
    <main className={styles.main}>
      <Suspense
        fallback={<Loading className="w-full h-full top-0 left-0 fixed z-50" />}
      >
        <FilterBar />
        <HomeHeader />
        <LightBoxProvider>
          <LightBox />
          <section>
            <ul className={styles.bookGrid}>
              {bookToPrints.map((book) => (
                <li key={book.ISBN}>
                  <Book {...book} />
                </li>
              ))}
            </ul>
          </section>
        </LightBoxProvider>
        <ToTop />
      </Suspense>
    </main>
  );
}

export default Home;
