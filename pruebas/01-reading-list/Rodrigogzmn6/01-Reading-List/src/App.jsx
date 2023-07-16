import "./App.css";
import { HomeContainer } from "./containers/HomeContainer";
import { BooksContextProvider } from "./contexts/BooksContext";

function App() {
  return (
    <div>
      <BooksContextProvider>
        <HomeContainer />
      </BooksContextProvider>
    </div>
  );
}

export default App;
