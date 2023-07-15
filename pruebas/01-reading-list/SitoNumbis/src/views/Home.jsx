// components
import Book from "../components/Book/Book";
import ToTop from "../components/ToTop/ToTop";
import Sidebar from "../components/Sidebar/Sidebar";

// contexts
import { useLibrary } from "../contexts/LibraryProvider";
import { useLanguage } from "../contexts/LanguageProvider";

// styles
import styles from "./styles.module.css";

function Home() {
  const { libraryState, setLibraryState } = useLibrary();

  const { languageState } = useLanguage();

  return (
    <main className={styles.main}>
      {/* <Sidebar /> */}
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
