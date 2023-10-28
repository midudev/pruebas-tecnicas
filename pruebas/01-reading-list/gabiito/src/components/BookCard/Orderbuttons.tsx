import { BookStoreItem, OrderDirection } from "@/types";
import { TbChevronUp, TbChevronDown } from "react-icons/tb";

interface BookCardOrderButtonsProps {
  book: BookStoreItem;
  modifyOrder: (book: BookStoreItem, direction: OrderDirection) => void;
}

const BookCardOrderButtons: React.FC<BookCardOrderButtonsProps> = ({
  book,
  modifyOrder,
}) => {
  return (
    <div className="w-fit flex flex-col justify-between py-10 -left-10 inset-0 opacity-100 md:opacity-0 group-hover/container:opacity-100">
          <button
            className="p-2 rounded-full bg-slate-600/30"
            onClick={() => modifyOrder(book, OrderDirection.UP)}
          >
            <TbChevronUp />
          </button>
          <button
            className="p-2 rounded-full bg-slate-600/30"
            onClick={() => modifyOrder(book, OrderDirection.DOWN)}
          >
            <TbChevronDown />
          </button>
        </div>
  );
}

export default BookCardOrderButtons;
