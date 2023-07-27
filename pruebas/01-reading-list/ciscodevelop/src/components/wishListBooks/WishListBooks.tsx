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
import { PropsUI } from "../../models/WishListModal";
import { Book } from "../../models/BooksModel";
import { useRef, useState } from "react";

function WishListBooks({ modalStateFav, setModalStateFav }: PropsUI) {
  const [dialog, setDialog] = useState(false);
  const wishListBooks = useSelector((state: RootState) => state.books.wishList);
  const dispatch = useAppDispatch();
  const refBook = useRef<Book | null>(null);

  const remobeAllBooksWishList = () => {
    dispatch(removeAllBooksWishList());
    setModalStateFav(false);
  };
  const remobeBookWishList = (book: Book) => {
    dispatch(removeBookWishList(book));
    setDialog(false);
    !store.getState().books.wishList.length && setModalStateFav(false);
  };
  return (
    <div className="wishlistbooks">
      <button
        className="btn-close"
        onClick={() => setModalStateFav(!modalStateFav)}
      >
        X
      </button>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        { wishListBooks.map((book: Book) => {
          const { ISBN, title, cover } = book;
          return (
            <SwiperSlide key={ISBN}>
              <h2 className="title">{title}</h2>
              <img
                src={cover}
                alt={title}
                width={150}
                height={200}
                onClick={() => {
                  setDialog(true);
                  refBook.current = book;
                }}
              />
              {dialog && refBook.current?.ISBN === ISBN && (
                <dialog className="dialog-remove-book">
                  <div className="container-dialog">
                    <header>
                      <h4>Remove this book?</h4>
                      <h6>{title}</h6>
                    </header>
                    <div className="body-dialog">
                      <button onClick={() => remobeBookWishList(book)}>
                        OK
                      </button>
                      <button onClick={() => setDialog(false)}>Cancel</button>
                    </div>
                  </div>
                </dialog>
              )}
            </SwiperSlide>
          );
        })}
        <footer>
          <h6>Click on image for remove one</h6>
        </footer>
        {wishListBooks.length > 0 && (
          <button
            className="btn-remove-all glow-on-hover"
            onClick={remobeAllBooksWishList}
          >
            Remove All Book
          </button>
        )}
      </Swiper>
    </div>
  );
}

export default WishListBooks;
