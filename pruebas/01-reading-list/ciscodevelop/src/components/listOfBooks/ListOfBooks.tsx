import { useSelector } from "react-redux";
import { addBookWish } from "../../features/books/booksSlice";
import { ToastContainer, toast } from "react-toastify";
import { RootState, store } from "../../app/store";
import { useAppDispatch } from "../../app/hooks";
import {  Book, Library } from "../../models/BooksModel";
import "react-toastify/dist/ReactToastify.css";
import "./listOfBooks.scss";

function ListOfBooks() {
  const storeBooks = useSelector((state: RootState) => state.books.booksList);
  const storeWishList = useSelector((state: RootState) => state.books.wishList);
  const dispatch = useAppDispatch();

  const handlerAddWish = (book: Book) => {
    dispatch(addBookWish(book));
    const showTost =
      storeWishList.length != store.getState().books.wishList.length;
    showTost ? toast.success("Added to Favorites!"):toast.warn("Already in your favorites books!");
  };

  return (
    <div className="container-cards-listofbooks">
      {storeBooks.library.map((item:Library) => (
        <div className="cards-books" key={item.book.ISBN}>
          <div className="card-header">
            <div className="cover-book">
              <img
                src={item.book.cover}
                alt={item.book.title}
                onClick={() => handlerAddWish(item.book)}
              />
            </div>
          </div>
          <div className="card-body">
            <h3>Title: {item.book.title}</h3>
            <details>
              <summary>More info</summary>
              <h4>Author: {item.book.author.name}</h4>
              <h4>Genre: {item.book.genre}</h4>
              <span>Yeard: {item.book.year}</span>
              <span>Pages: {item.book.pages}</span>
              <details>
                <summary>Desciption</summary>
                {item.book.synopsis}
              </details>
            </details>
            <div className="otherbooks">
              <details>
                <summary> Other Books</summary>
                {item.book.author.otherBooks.map((item:string) => (
                  <h5 key={item}>{item}</h5>
                ))}
              </details>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer
        style={{ zIndex: 999, top: 100 }}
        position="top-right"
        autoClose={2000}
        limit={1}
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
