import { library } from "../../books.json";
import { List } from "./components/List";
import { Current } from "./components/Current";
import { useEffect } from "react";
import useBookStore from "./store/store";
import { Navbar } from "./components/Navbar";

function App() {
  useEffect(() => {
    useBookStore.setState({ books: library });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header>
        <Navbar />
      </header>
      <div className="container mx-auto py-5">
        <div className="flex gap-2">
          <List />
          <Current />
        </div>
      </div>
    </div>
  );
}

export default App;
