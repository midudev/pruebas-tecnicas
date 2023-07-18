import { useSelector } from "react-redux";
import { RootState, store } from "../../app/store";
import {
  removeAllBooksWishList,
  removeBookWishList,
} from "../../features/books/booksSlice";
import { useAppDispatch } from "../../app/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "./wishListBooks.scss";
import "swiper/css";
import "swiper/css/effect-cards";
import { WishListModal } from "../../models/WishListModal";
import { Book } from "../../models/BooksModel";
import { useRef, useState } from "react";

function WishListBooks({ modalStateFav, setModalStateFav }: WishListModal) {
  const [dialog, setDialog] = useState(false);
  const wishListBooks = useSelector((state: RootState) => state.books.wishList);
  const dispatch = useAppDispatch();
  const refBook = useRef<Book | null>(null);

  const remobeAllBooksWishList = () => {
    dispatch(removeAllBooksWishList());
    setModalStateFav(false);
  };
  const remobeBookWishList = (item: Book) => {
    dispatch(removeBookWishList(item));
    setDialog(false);
    !store.getState().books.wishList.length && setModalStateFav(false);
  };
  return (
    <div className="wishlistbooks">
      {wishListBooks.length > 0 && (
        <button className="btn-clear-all" onClick={remobeAllBooksWishList}>Remove All Book</button>
      )}
      <span onClick={() => setModalStateFav(!modalStateFav)}>X</span>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {wishListBooks.map((book: Book) => (
          <SwiperSlide key={book.ISBN}>
            <h2 className="title">{book.title}</h2>
            <img
              src={book.cover}
              alt={book.title}
              width={150}
              height={200}
              onClick={() => {
                setDialog(true);
                refBook.current = book;
              }}
            />
            {dialog && refBook.current?.ISBN === book.ISBN && (
              <dialog className="dialog-remove-book">
                <div className="container-dialog">
                  <header>
                    <h4>Remove this book?</h4>
                    <h6>{book.title}</h6>
                  </header>
                  <div className="body-dialog">
                    <button onClick={() => remobeBookWishList(book)}>OK</button>
                    <button onClick={() => setDialog(false)}>Cancel</button>
                  </div>
                </div>
              </dialog>
            )}
          </SwiperSlide>
        ))}
        <h6>Click on image for remove one</h6>
      </Swiper>
    </div>
  );
}

export default WishListBooks;
