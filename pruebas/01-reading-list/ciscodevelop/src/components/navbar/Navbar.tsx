import { useSelector } from "react-redux";
import "./navbar.scss";
import { selectBooksWishList } from "../../features/books/booksSlice";
import { PropsUI } from "../../models/WishListModal";
import { store } from "../../app/store";

function Navbar({ setModalStateFav, searchWord }: PropsUI) {
  const countFavorit = useSelector(selectBooksWishList);
  const handlerShowFavorit = () => {
    store.getState().books.wishList.length &&
      (setModalStateFav(true), window.scrollTo(0, 70));
  };
  return (
    <nav className="navbar">
      <div className="left glow-on-hover">
        <a href="/">
          <img src="library-svgrepo-com.svg" alt="" />
          <span>Library Cisco</span>
        </a>
      </div>
      <div className="center">
        <div className="filter">
          <input
          className="input-search glow-on-hover"
            type="text"
            placeholder="Search Book"
            value={searchWord?.wordSearch}
            onChange={(e) => searchWord?.setWordSearch(e.target.value)}
          />
        </div>
        {/* <ul>           
          <li className="glow-on-hover">Favorites</li>
          <li className="glow-on-hover">About</li>
        </ul> */}
      </div>
      <div className="rigth">
        <button className="glow-on-hover" onClick={handlerShowFavorit}>
          Your <mark>{countFavorit.length}</mark> Favorites Books
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
