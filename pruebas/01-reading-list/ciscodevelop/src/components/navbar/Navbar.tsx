import { useSelector } from "react-redux";
import "./navbar.scss";
import { selectBooksWishList } from "../../features/books/booksSlice";
import { WishListModal } from "../../models/WishListModal";
import { store } from "../../app/store";


function Navbar({ modalState, setModalState }: WishListModal) {
  const countFavorit = useSelector(selectBooksWishList);
  const handlerShowFavorit = () => {
    store.getState().books.wishList.length != 0 &&
    setModalState(true);
    !modalState && window.scrollTo(0, 0);
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
        <ul>
           
          <li className="glow-on-hover">Favorites</li>
          <li className="glow-on-hover">About</li>
        </ul>
      </div>
      <div className="rigth">
        <button className="glow-on-hover" onClick={handlerShowFavorit}>
         Your <mark>{countFavorit.length}</mark> Favorites  Books
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
