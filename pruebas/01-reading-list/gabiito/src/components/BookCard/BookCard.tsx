import { useModalState } from "@/hooks";
import { BookStoreItem, OrderDirection } from "@/types";
import { useCallback, useRef, useState } from "react";
import {
  TbBookmarkMinus,
  TbBookmarkPlus,
} from "react-icons/tb";
import BookCardOrderButtons from "./Orderbuttons";
import { useReadingListStore } from "@/store";
import { toast } from "react-toastify";

interface BookCardProps {
  book: BookStoreItem;
  listed?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  listed,
}) => {
  const { addBook, changeOrder, removeBook } = useReadingListStore();

  const [isLoaded, setIsLoaded] = useState(false);
  const { onOpen } = useModalState();
  const card = useRef<HTMLDivElement>(null);

  const handleModifyOrder = useCallback(
    (book: BookStoreItem, direction: OrderDirection) => {
      changeOrder(book, direction);
      if (direction === OrderDirection.DOWN) {
        setTimeout(() => {
          card.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }, 50);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
  );

  const handleAddBook = (book: BookStoreItem) => {
    addBook(book);
    toast.success((
      <p>
        {book.title}
        <br />
        <span className="text-sm text-gray-500">
          fue agregado a tu Reading List.
        </span>
      </p>
    ));
  };

  const handleRemoveBook = (book: BookStoreItem) => {
    removeBook(book);
    toast.success((
      <p>
        {book.title}
        <br />
        <span className="text-sm text-gray-500">
          fue removido de tu Reading List.
        </span>
      </p>
    ));
  };

  const handleClick = () => {
    if (listed) {
      handleRemoveBook(book);
      return;
    }
    handleAddBook(book);
  };

  return (
    <div className="flex justify-center gap-2 group/container w-full h-full" ref={card}>
      {listed && <BookCardOrderButtons book={book} modifyOrder={handleModifyOrder}/>}

      <div
        className={`
        ${isLoaded ? "" : "pointer-events-none"}
        ${listed ? "w-3/4" : "w-full"}
        max-w-[250px]
        relative group/element bg-white rounded-lg overflow-hidden
        shadow-md hover:shadow-lg
        translate-y-0
        transition-all duration-300
      `}
      >
        <div
          className={`
          ${isLoaded ? "" : "animate-pulse"}
          w-full h-full bg-slate-300 
        `}
        >
          <img
            className={`
            ${isLoaded ? "opacity-100" : "opacity-0"}
            transition-opacity duration-300
            w-full h-full object-cover  aspect-[317/475]
          `}
            src={book.cover}
            alt={book.title}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <button
          data-testid="addBook"
          className="
          absolute top-0 right-0 z-10 p-2 
          opacity-0 group-hover/element:opacity-100 
        text-purple-300 hover:text-purple-400
          transition-colors
        "
          onClick={handleClick}
        >
          {listed ? (
            <TbBookmarkMinus className="w-6 h-6" />
            ) : (
              <TbBookmarkPlus className="w-6 h-6" />
          )}
        </button>
        <div
          className="
          absolute 
          bottom-0 p-4
          h-full flex flex-col justify-end
          bg-gray-900/40 
          backdrop-filter backdrop-blur-sm
          opacity-0
          group-hover/element:opacity-100
          transition-opacity
          duration-300
        "
        >
            <div>
              <h3 className="text-lg font-bold text-white">{book.title}</h3>
              <p className="mt-4 text-sm text-purple-200">{book.author.name}</p>
            </div>
            <div>
              <p className="line-clamp-2 text-zinc-50">{book.synopsis}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="text-sm font-semibold text-purple-500 hover:text-purple-300 transition-colors"
                onClick={() => onOpen(book)}
              >
                Ver más...
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
