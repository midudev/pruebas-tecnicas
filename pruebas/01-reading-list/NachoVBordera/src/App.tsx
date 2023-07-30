import "./App.css";
import BookList from "./components/booklist/Booklist";
import SavedBooksList from "./components/savedbooks/SavedBooks";
import SavedUi from "./components/savedbooks/Seved.ui";
import SearchSection from "./components/searchSection/SearchSection";
import { useBookContext } from "./context/SavedContext";

function App() {
  const { books } = useBookContext();
  return (
    <>
      <header>
        <h1>RENT A BOOK</h1>
        <SavedUi number={books.length} />
      </header>
      <main className="mainSection">
        <section>
          <SearchSection />
          <SavedBooksList />
        </section>
        <BookList></BookList>
      </main>
    </>
  );
}

export default App;
