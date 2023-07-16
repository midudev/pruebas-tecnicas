import { useEffect, useState } from "react";
import "./app.scss";
import ListOfBooks from "./components/listOfBooks/ListOfBooks";
import WishListBooks from "./components/wishListBooks/WishListBooks";
import Navbar from "./components/navbar/Navbar";

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
        {modalState && <WishListBooks modalState={modalState} setModalState={setModalState} />}
        <ListOfBooks />
      </main>
    </div>
  );
}

export default App;
