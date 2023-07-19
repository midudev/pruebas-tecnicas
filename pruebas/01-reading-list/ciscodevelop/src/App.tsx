import { Suspense, lazy, useEffect, useState } from "react";
import "./app.scss";
import ListOfBooks from "./components/listOfBooks/ListOfBooks";
import Navbar from "./components/navbar/Navbar";
import Spinner from "./components/spinner/Spinner";
const WishListBooks = lazy(
  () => import("./components/wishListBooks/WishListBooks")
);

function App() {
  const [isScrollY, setIsScrollY] = useState(false);
  const [modalStateFav, setModalStateFav] = useState(false);
  const [wordSearch, setWordSearch] = useState<string>("")
  const controlShowNav = () => {
    window.scrollY > 50 ? setIsScrollY(true) : setIsScrollY(false);
  };
  useEffect(() => {
    //todo: find better metod for do this
    window.addEventListener("scroll", controlShowNav);
    return () => {
      window.removeEventListener("scroll", controlShowNav);
    };
  }, [isScrollY]);

  return (
    <div className="app">
      <header className={isScrollY ? "show-bg-nav" : ""}>
        <Navbar searchWord={{wordSearch,setWordSearch}} setModalStateFav={setModalStateFav} />
      </header>
      <main className="main">
        <Suspense fallback={<Spinner text="Loading..!"/>}>
          {modalStateFav && (
            <WishListBooks
              modalStateFav={modalStateFav}
              setModalStateFav={setModalStateFav}
            />
          )}
        </Suspense>
        <ListOfBooks  keyword={wordSearch}/>
      </main>
      <button className="go-up" onClick={() => window.scrollTo(0, 0)}>{"<"}</button>
    </div>
  );
}

export default App;
