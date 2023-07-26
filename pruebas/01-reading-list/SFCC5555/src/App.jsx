import { useSelector } from "react-redux"
import { BooksAvailable } from "./components/BooksAvailable"
import { DarkModeSwitch } from "./components/DarkModeSwitch"
import { ReadingList } from "./components/ReadingList"
import { ExternalLink } from "./components/ExternalLink"
import { BrowserRouter } from 'react-router-dom';

function App() {

  // Get the value of darkMode from the state using react-redux
  const darkMode = useSelector((state) => state.darkMode);

  return (
    // Apply the dark-mode or light-mode class depending on the darkMode value
    <div className={`min-h-screen flex flex-col items-center px-4 sm:px-6 py-12 gap-8 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="text-4xl sm:text-6xl cursor-crosshair font-bold">
        B<i className="bi bi-plus-circle-fill text-3xl sm:text-5xl" /><i className="bi bi-dash-circle-fill text-3xl sm:text-5xl" />k-List
      </h1>
      <section className="w-full flex flex-col sm:flex-row gap-3">
        <BrowserRouter>
          <BooksAvailable />
          <ReadingList />
        </BrowserRouter>
      </section>
      <DarkModeSwitch />
      <ExternalLink />
    </div>
  );
}

export default App;