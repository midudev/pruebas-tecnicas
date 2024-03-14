import "./App.css";
import { HomeContainer } from "./containers/HomeContainer";
import { BooksContextProvider } from "./contexts/BooksContext";

function App() {
  return (
    <div className="bg-main-bg text-primary-text min-h-screen">
      <BooksContextProvider>
        <HomeContainer />
      </BooksContextProvider>
    </div>
  );
}

export default App;

{
  /* <div className="bg-main-bg text-primary-text min-h-screen">
      <BooksContextProvider>
        <HomeContainer />
      </BooksContextProvider>
    </div> */
}
