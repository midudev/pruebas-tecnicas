import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { removeBookWish } from "../../../features/books/booksSlice";
import { useAppDispatch } from "../../../app/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "./wishListBooks.scss";
import "swiper/css";
import "swiper/css/effect-cards";
//import "./styles.css";
function WishListBooks() {
  const wishListBooks = useSelector((state: RootState) => state.books.wishList);
  const dispatch = useAppDispatch();
  return ( 
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {wishListBooks.map((item) => (
          <SwiperSlide key={item.ISBN}>
            <h2 className="title">{item.title}</h2>
            <img
              src={item.cover}
              alt={item.title}
              width={150}
              height={200}
              onClick={() => dispatch(removeBookWish(item))}
            />
          </SwiperSlide>
        ))}
      </Swiper>   
  );
}

export default WishListBooks;
