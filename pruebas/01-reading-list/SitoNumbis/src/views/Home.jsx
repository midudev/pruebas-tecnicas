// components
import Book from "../components/Book/Book";
import ToTop from "../components/ToTop/ToTop";
import FilterBar from "../components/FilterBar/FilterBar";

// contexts
import { LightBoxProvider } from "../components/LightBox/LightBoxProvider";
import { useLibrary } from "../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";
import LightBox from "../components/LightBox/LightBox";

function Home() {
  const { libraryState } = useLibrary();

  return (
    <main className={styles.main}>
      <FilterBar />
      <LightBoxProvider>
        <LightBox />
        <section>
          <div className={styles.bookGrid}>
            {libraryState.books.map((book) => (
              <Book key={book.ISBN} {...book} />
            ))}
          </div>
        </section>
      </LightBoxProvider>
      <ToTop />
    </main>
  );
}

export default Home;
