import { useState } from "react";
import "./App.css";
import { HomeContainer } from "./containers/HomeContainer";
import { BooksContextProvider } from "./contexts/BooksContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BooksContextProvider>
        <HomeContainer />
      </BooksContextProvider>
    </div>
  );
}

export default App;
