import "./App.css";
import BookList from "./components/booklist/Booklist";
import SearchSection from "./components/searchSection/SearchSection";

function App() {
  return (
    <>
      <header>
        <h1>RENT A BOOK</h1>
        <p>SAVED 0</p>
      </header>
      <main className="mainSection">
        <SearchSection />
        <BookList></BookList>
      </main>
    </>
  );
}

export default App;
