import { useModalState } from "@/hooks";
import { useReadingListStore } from "@/store";
import { BookStoreItem } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { TbX, TbBookmarkPlus } from "react-icons/tb";
import { toast } from "react-toastify";

const Modal: React.FC = () => {
  const useModal = useModalState();
  const { addBook } = useReadingListStore();
  const [showModal, setShowModal] = useState(false);

  const book = useMemo(() => {
    return useModal.book as BookStoreItem;
  }, [useModal.book]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      useModal.onClose();
    }, 300);
  };

  useEffect(() => {
    if (useModal.isOpen) {
      setShowModal(true);
    }
  }, [useModal.isOpen]);

  const handleAddBook = () => {
    addBook(book);
    handleClose();
    toast.success((
      <p>
        {book.title}
        <br />
        <span className="text-sm text-gray-500">
          is now on your reading list!
        </span>
      </p>
    ));
  };

  if (!book) {
    return null;
  }

  return (
    <>
      <div
        className={`
          ${useModal.isOpen ? "block" : "hidden"}
          fixed top-0 left-0 w-full h-full z-30 p-5
          flex items-center justify-center
          bg-gray-700/40
          backdrop-filter backdrop-blur-sm
        `}
      >
        <div
          className={`
          ${
            showModal
              ? "translate-y-0 ease-out opacity-100"
              : "translate-y-5 ease-in opacity-0"
          }
          relative w-full max-w-2xl p-4 lg:p-6
          bg-white rounded-lg shadow-lg
          transition-all transform
        `}
        >
          <div className="flex flex-col gap-4 lg:gap-2 max-h-[80vh]">
            <div className="flex justify-end">
              <button className="" onClick={handleClose}>
                <TbX size={20} />
              </button>
            </div>
            <div className="flex-grow flex flex-col lg:flex-row gap-6 max-h-full px-2 lg:px-0 overflow-y-auto">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full lg:w-1/3 h-full object-cover my-auto aspect-[317/475] rounded-md"
              />

              <div className="flex flex-col gap-2 text-gray-600">
                <h2 className="text-2xl font-bold text-gray-700">
                  {book.title}
                </h2>
                <div className="flex gap-3 items-center">
                  <p className="text-sm">{book.author.name}</p>
                </div>
                <hr />
                <p className="text-end text-xs text-gray-400">
                  ISBN - {book.ISBN}
                </p>
                <div className="">
                  <h3 className="font-semibold mb-3">Sinopsis</h3>
                  <p className="text-sm">{book.synopsis}</p>

                  <h3 className="font-semibold my-3">Detalles</h3>
                  <div className="border-l mx-2 px-3 my-2 text-sm w-fit">
                    <div className="flex gap-3 mb-2">
                      <h4 className="font-semibold w-14">Género</h4>
                      <p>{book.genre}</p>
                    </div>
                    <div className="flex gap-3 mb-2">
                      <h4 className="font-semibold w-14">Año</h4>
                      <p>{book.year}</p>
                    </div>
                    <div className="flex gap-3 mb-2">
                      <h4 className="font-semibold w-14">Páginas</h4>
                      <p>{book.pages}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500 hover:bg-purple-600 text-white transition-colors"
                onClick={handleAddBook}
              >
                <TbBookmarkPlus size={16} />
                <span>Agregar a mi lista</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
