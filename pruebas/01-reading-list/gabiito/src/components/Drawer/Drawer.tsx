import { useDrawerState } from "@/hooks";
import { TbX } from "react-icons/tb";
import { BookList } from "@/components";
import { useReadingListStore } from "@/store";
import { useEffect, useState } from "react";
import { BookStoreItem } from "@/types";
import { ImBooks } from "react-icons/im";

interface DrawerProps {
  onClose?: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  onClose,
}) => {
  const useDrawer = useDrawerState();

  const handleClose = () => {
    onClose && onClose();
    useDrawer.onClose();
  };

  const { books, count } = useReadingListStore();
  const [bookList, setBookList] = useState<BookStoreItem[]>(books ? Object.values(books) : []);

  useEffect(() => {
    setBookList(Object.values(books ? Object.values(books) : []));
  }, [books]);

  return (
    <>
      <div 
        className={`
          ${useDrawer.isOpen ? 'block' : 'hidden'}
          fixed inset-0 
          bg-slate-700/40
          backdrop-blur-[2px] z-30 
          transition-all
        `} 
        onClick={handleClose} 
      />
      <div
        className={`
          ${useDrawer.isOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'}
          fixed flex flex-col 
          inset-y-0 right-0 w-10/12 md:w-96 
          bg-zinc-50 z-40 shadow-xl 
          transition-transform duration-300 transform
        `}
      >
        <div className="flex justify-between items-center h-16 p-4 border-b border-gray-300">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-700">
            <ImBooks size={22} />
            {`Mi Reading List (${count})`}
          </h2>
          <button onClick={handleClose}>
            <TbX className="w-6 h-6" />
          </button>

        </div>
        <div className="flex-grow w-full py-4 pl-2 pr-8 overflow-y-auto">
            <BookList books={bookList} listed />
        </div>
      </div>
    </>
  );
}

export default Drawer;
