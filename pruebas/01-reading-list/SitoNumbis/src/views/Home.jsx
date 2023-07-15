// components
import Book from "../components/Book/Book";
import ToTop from "../components/ToTop/ToTop";
import FilterBar from "../components/FilterBar/FilterBar";

// contexts
import { useLibrary } from "../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

function Home() {
  const { libraryState, setLibraryState } = useLibrary();

  return (
    <main className={styles.main}>
      <FilterBar />
      <section>
        <div className={styles.bookGrid}>
          {libraryState.books.map((book) => (
            <Book key={book.ISBN} {...book} />
          ))}
        </div>
      </section>
      <ToTop />
    </main>
  );
}

export default Home;
