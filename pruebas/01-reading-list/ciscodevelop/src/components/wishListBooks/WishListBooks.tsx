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

function WishListBooks({ modalState, setModalState }: WishListModal) {
  const wishListBooks = useSelector((state: RootState) => state.books.wishList);
  const dispatch = useAppDispatch();
  const remobeAllBooksWishList = () => {
    dispatch(removeAllBooksWishList());
    setModalState(false);
  };
  const remobeBookWishList = (item:Book) => {
    dispatch(removeBookWishList(item))
    !store.getState().books.wishList.length &&
    setModalState(false);
  };
  return (
    <div className="wishlistbooks">
      {wishListBooks.length > 0 && <button onClick={remobeAllBooksWishList}>
        Clear All
      </button>}
      <span onClick={() => setModalState(!modalState)}>X</span>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {wishListBooks.map((item:Book) => (
          <SwiperSlide key={item.ISBN}>
            <h2 className="title">{item.title}</h2>
            <img
              src={item.cover}
              alt={item.title}
              width={150}
              height={200}
              onClick={()=>remobeBookWishList(item)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WishListBooks;
