import { useSelector } from "react-redux";
import {
  addBookWish,
  removeBookWishList,
} from "../../features/books/booksSlice";
import { ToastContainer, toast } from "react-toastify";
import { RootState, store } from "../../app/store";
import { useAppDispatch } from "../../app/hooks";
import { Book } from "../../models/BooksModel";
import StarFavorites from "../../assets/star-fav";
import "react-toastify/dist/ReactToastify.css";
import "./listOfBooks.scss";
import { searchBooks } from "../../utils/filter/useFilter";
import { render } from "react-dom";
import Spinner from "../spinner/Spinner";

function ListOfBooks({ keyword }: { keyword: string }) {
  const storeBooks = searchBooks(
    useSelector((state: RootState) => state.books.booksList).library,
    keyword
  );
  const storeWishList = useSelector((state: RootState) => state.books.wishList);
  const dispatch = useAppDispatch();

  const handlerAddWish = (book: Book) => {
    dispatch(addBookWish(book));
    const showTost =
      storeWishList.length < store.getState().books.wishList.length;
    showTost
      ? toast.success("Added to Favorites!")
      : toast.warn("Already in your favorites books!");
  };
  const handlerRemoveWish = (book: Book) => {
    dispatch(removeBookWishList(book));
    toast.error("Removed from the your favorites books!");
  };

  return (
    <div className="container-cards-listofbooks">
      {storeBooks.length ? (
        storeBooks.map(({ book }: { book: Book }) => {
          const {
            ISBN,
            title,
            author,
            genre,
            year,
            pages,
            synopsis,
            cover,
            wish,
          } = book;
          return (
            <div className="cards-books" key={ISBN}>
              <div className="card-header">
                <button
                  className="btn-addwishlist"
                  onClick={
                    !wish
                      ? () => handlerAddWish(book)
                      : () => handlerRemoveWish(book)
                  }
                >
                  <StarFavorites color={wish ? "#d2c308" : "#fff"} />
                </button>
                <div className="cover-book">
                  <img
                    src={cover}
                    alt={title}
                    onClick={() => handlerAddWish(book)}
                  />
                </div>
              </div>
              <div className="card-body">
                <h3>Title: {title}</h3>
                <details>
                  <summary>More info</summary>
                  <h4>Author: {author.name}</h4>
                  <h4>Genre: {genre}</h4>
                  <span>Yeard: {year}</span>
                  <span>Pages: {pages}</span>
                  <details>
                    <summary>Desciption</summary>
                    {synopsis}
                  </details>
                </details>
                <div className="otherbooks">
                  <details>
                    <summary> Other Books</summary>
                    {author.otherBooks.map((otherBook: string) => (
                      <h5 key={otherBook}>{otherBook}</h5>
                    ))}
                  </details>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="books-notfound">
          <Spinner text="No books found..!"></Spinner>
        </div>
      )}
      <ToastContainer
        style={{ zIndex: 999, top: 170 }}
        position="top-right"
        autoClose={1000}
        limit={5}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default ListOfBooks;
