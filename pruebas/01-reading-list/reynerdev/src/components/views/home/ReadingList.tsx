import React from "react";
import { Icon, IconCatalog } from "~/components/Icon";
import Image from "next/image";
import { IBook } from "~/types/books";
import { useDrag } from "~/hooks/useDrag";

export interface IBookItemProps {
  book: IBook;
  orderNumber?: number;
  onClose?: () => void;
  onClick: () => void;
}

export interface IPropsReadingList {
  readingList: IBook[];
  onClose?: (isbn: string) => void;
  onClick: (book: IBook) => void;
  handleEmptyList: () => void;
}

export const ReadingList = (props: IPropsReadingList) => {
  const { handleOnMouseMove, releaseDragging, startDragging, carouselRef } =
    useDrag();

  return (
    <section className=" mr-8 flex w-full flex-col gap-8">
      <span className=" flex-grow-0  text-5xl font-medium">Reading List</span>
      {props.readingList.length > 0 ? (
        <div
          ref={carouselRef}
          onMouseMove={(e) => handleOnMouseMove(e)}
          onMouseDown={(e) => startDragging(e)}
          onMouseUp={() => releaseDragging()}
          onDragEnd={() => releaseDragging()}
          className="flex h-full items-center gap-16 overflow-x-hidden bg-primary-150-light  p-14"
        >
          {props.readingList?.map((book, i) => (
            <BookItem_
              book={book}
              key={i}
              orderNumber={i}
              onClick={() => props.onClick && props.onClick(book)}
              onClose={() => props.onClose && props.onClose(book.ISBN)}
            />
          ))}
        </div>
      ) : (
        <div
          onClick={() => props.handleEmptyList()}
          className="flex h-full items-center  cursor-pointer justify-center gap-4 bg-primary-150-light text-4xl"
        >
          <Icon
            icon={IconCatalog.plusCircle}
            className="h-12 text-softpink"
            strokeWidth={1}
          />
          <div className="text-primary-black">Add a random book</div>
        </div>
      )}
    </section>
  );
};

export const BookItem_ = (props: IBookItemProps) => {
  const { book, orderNumber, onClose, onClick } = props;
  return (
    <div className="relative flex-shrink-0 flex-grow-0 basis-[150px] cursor-pointer">
      {typeof orderNumber !== "undefined" ? (
        <span className="absolute -left-[30%] top-[15%] z-0  overflow-hidden  whitespace-pre-wrap py-[0.08em] font-mono text-[120px] font-semibold  leading-[160px]   text-softpink">
          {orderNumber + 1}
          {/* <div>{ordernumber + 1}</div> */}
        </span>
      ) : null}
      <img
        alt={book.title}
        onClick={onClick}
        className="z-1 relative aspect-[1/1.6]  w-[180px] max-w-full"
        src={book.cover}
      />
      {/* <span className="overflow-x-hidden text-ellipsis whitespace-nowrap">{book.title}</span> */}
      <Icon
        icon={IconCatalog.closeIcon}
        strokeWidth={1.6}
        onClick={() => onClose?.()}
        // isSolid
        // isSolid
        className="absolute right-0 top-0 h-6 -translate-y-1/2  translate-x-1/2 cursor-pointer rounded-full bg-softpink fill-white p-1   text-white  "
      />
    </div>
  );
};

export const BookItem = () => {
  return (
    <section className="flex items-start gap-8">
      <div className="relative flex-grow-0">
        <span className="absolute -left-[30%]  top-[15%] z-0 text-[160px]  font-semibold leading-none text-softpink">
          1
        </span>
        <img
          className="z-1  relative h-64"
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
        />
        <span>Frankeistan</span>
        <Icon icon={IconCatalog.closeIcon} className="h-3" isSolid />
      </div>
      <div className="relative flex-grow-0">
        <span className="absolute -left-9 z-0 translate-x-0  text-[160px] font-semibold text-softpink">
          2
        </span>
        <img
          className="z-12 relative h-64"
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
        />
        <span>Frankeistan</span>
        <Icon icon={IconCatalog.closeIcon} className="h-3" />
      </div>
    </section>
  );
};

// export const Book;
