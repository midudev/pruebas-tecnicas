import React from "react";
import { Icon, IconCatalog } from "../Icon";
import { motion } from "framer-motion";
import { IBooksList } from "~/types/books";

export interface IScrollRef {
  draggingStarted: boolean;
  prevPageX: number | null;
  prevScrollLeft: number | null;
}

export interface ISiderCarousel {
  onClick: (isbn: string) => void;
  books: IBooksList;
}

export const SliderCarousel = (props: ISiderCarousel) => {
  const { onClick, books } = props;
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLDivElement[]>([]);
  const imgTitle = React.useRef<HTMLDivElement[]>([]);
  const scrollRef = React.useRef<IScrollRef>({
    draggingStarted: false,
    prevScrollLeft: null,
    prevPageX: null,
  });
  const hoverScale = 1.2;
  const handleOnMouseMove = (e: React.MouseEvent) => {
    if (carouselRef.current && scrollRef.current.draggingStarted) {
      e.preventDefault();
      // our delta difference
      const positionDifference =
        scrollRef.current.prevPageX && e.pageX - scrollRef.current.prevPageX;
      if (positionDifference && scrollRef.current.prevScrollLeft !== null) {
        // update the position left with the updated one
        carouselRef.current.scrollLeft =
          scrollRef.current.prevScrollLeft - positionDifference;
      }
    }
  };

  const startDragging = (e: React.MouseEvent) => {
    scrollRef.current.draggingStarted = true;
    if (scrollRef.current && carouselRef.current) {
      scrollRef.current.prevScrollLeft = carouselRef.current.scrollLeft;
      scrollRef.current.prevPageX = e.pageX;
    }
  };

  const releaseDragging = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollRef.current.draggingStarted = false;
  };

  const handleOnClick = (isbn: string) => {
    props.onClick(isbn);
  };

  React.useLayoutEffect(() => {
    if (carouselRef.current) {
      let maxHeight = 0;
      let maxOffsetTopTitle = 0;
      let maxOffsetHightTitle = 0;

      if (imgRef.current && imgTitle.current) {
        console.log("imgRefcurrent");

        for (const img of imgRef.current) {
          const cH = img.offsetHeight;
          maxHeight = !(cH > maxHeight) ? maxHeight : (maxHeight = cH);
        }
        for (const img of imgTitle.current) {
          let cH = img.offsetHeight;
          maxOffsetTopTitle = !(cH > maxOffsetTopTitle)
            ? maxOffsetTopTitle
            : (maxOffsetTopTitle = cH);

          cH = img.offsetTop;
          maxOffsetHightTitle = !(cH > maxOffsetHightTitle)
            ? maxOffsetHightTitle
            : (maxOffsetHightTitle = cH);
        }

        const totalCarouselHeight =
          (maxOffsetHightTitle + maxOffsetTopTitle) * hoverScale * 1;

        carouselRef.current.style.height = `${totalCarouselHeight}px`;
      }
    }
  }, []);

  return (
    <div className="wrapper flex w-full items-center">
      <div
        className="carousel z-1 relative flex  cursor-pointer items-center gap-20 overflow-x-hidden overflow-y-hidden px-12"
        ref={carouselRef}
        onMouseMove={(e) => handleOnMouseMove(e)}
        onMouseDown={(e) => startDragging(e)}
        onMouseUp={(e) => releaseDragging(e)}
        onDragEnd={(e) => releaseDragging(e)}
      >
        {books.length !== 0 ? (
          books.map((book, i) => {
            return (
              <motion.div
                id="carousel_img"
                // onMouseOver={() => handleOnClick(book.book.ISBN)}
                whileHover={{ scale: hoverScale, translateY: "-8%" }}
                ref={(element) => {
                  // assign the ref for every map child
                  // console.log({element})
                  if (element) {
                    imgRef.current[i] = element;
                  }
                }}
                key={i}
                className="z-1 relative flex aspect-[1/1.6] shrink-0 basis-[150px] flex-col gap-2  object-fill 2xl:basis-[200px]"
              >
                <img
                  className="aspect-[1/1.6] h-full w-full object-cover shadow-book2 "
                  src={book.book.cover}
                  onClick={() => handleOnClick(book.book.ISBN)}
                />
                <div
                  ref={(element) => element && (imgTitle.current[i] = element)}
                  className="absolute left-0 right-0 top-[105%] z-10 overflow-hidden overflow-ellipsis text-ellipsis whitespace-nowrap text-center"
                >
                  {book.book.title}
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="text-5xl italic">
            Out of books for now, but stay tuned for new additions! Happy
            reading!
          </div>
        )}
      </div>
    </div>
  );
};
