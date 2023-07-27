import "./App.css";
import BookList from "./components/booklist/Booklist";
import SearchSection from "./components/searchSection/SearchSection";

function App() {
  return (
    <>
      <SearchSection />
      <BookList></BookList>
    </>
  );
}

export default App;
