import "./App.css";
import { HomeContainer } from "./containers/HomeContainer";
import { BooksContextProvider } from "./contexts/BooksContext";

function App() {
  return (
    <div>
      <BooksContextProvider>
        <HomeContainer />
      </BooksContextProvider>
      <button
        onClick={() => {
          localStorage.removeItem("library");
          localStorage.removeItem("readingList");
        }}
      >
        eliminar
      </button>
    </div>
  );
}

export default App;
