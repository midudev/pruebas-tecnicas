import { library } from "../../books.json";
import { List } from "./components/List";
import { Current } from "./components/Current";
import { useEffect } from "react";
import useBookStore from "./store/store";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Authors } from "./components/Authors";

function App() {
  // initialize the store and the local storage with data
  useEffect(() => {
    let genres = [];
    let authors = [];
    if (window.localStorage.getItem("current") === null) {
      window.localStorage.setItem("current", JSON.stringify([]));
    }
    library.forEach((item) => {
      const { genre, author } = item.book;
      if (!genres.includes(genre)) genres.push(genre);
      if (!authors.includes(author)) authors.push(author);
    });
    useBookStore.setState({ books: library, genres, authors });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <div className="container mx-auto py-3">
        <Header />
        <div className="my-6 flex h-screen gap-2" id="books">
          <List />
          <Current />
        </div>
        <Authors />
      </div>
      <Footer />
    </div>
  );
}

export default App;
