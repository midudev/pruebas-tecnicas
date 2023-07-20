import { library } from "../../books.json";
import { List } from "./components/List";
import { Current } from "./components/Current";
import { useEffect } from "react";
import useBookStore from "./store/store";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";

function App() {
  useEffect(() => {
    useBookStore.setState({ books: library });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header>
        <Navbar />
      </header>
      <div className="container mx-auto py-3">
        <Header />
        <div className="mt-6 flex gap-2">
          <List />
          <Current />
        </div>
      </div>
    </div>
  );
}

export default App;
