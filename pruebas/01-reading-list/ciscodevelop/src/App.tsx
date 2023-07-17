import { Suspense, lazy, useEffect, useState } from "react";
import "./app.scss";
import ListOfBooks from "./components/listOfBooks/ListOfBooks";
import Navbar from "./components/navbar/Navbar";
const WishListBooks = lazy(
  () => import("./components/wishListBooks/WishListBooks")
);

function App() {
  const [isScrollY, setIsScrollY] = useState(false);
  const [modalState, setModalState] = useState(false);

  const controlShowNav = () => {
    window.scrollY > 50 ? setIsScrollY(true) : setIsScrollY(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlShowNav);
    return () => {
      window.removeEventListener("scroll", controlShowNav);
    };
  }, [isScrollY]);

  return (
    <div className="app">
      <header className={isScrollY ? "show-bg-nav" : ""}>
        <Navbar modalState={modalState} setModalState={setModalState} />
      </header>
      <main className="main">
        <Suspense fallback={<h2>Loading...</h2>}>
          {modalState && (
            <WishListBooks
              modalState={modalState}
              setModalState={setModalState}
            />
          )}
        </Suspense>
        <ListOfBooks />
      </main>
    </div>
  );
}

export default App;
