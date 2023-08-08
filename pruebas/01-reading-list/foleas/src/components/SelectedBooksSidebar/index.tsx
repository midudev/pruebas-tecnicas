import { useStore } from "../../store/store";
import { Book } from "../../types";
import { stickyTop, textColorAnimationClass } from "../../utils/tailwind";
import BookCard from "../common/BookCard";

const SelectedBooksSidebar = () => {
  const {
    books,
    selectedBooks,
    setSelectedBooks,
    lastBookClicked,
    setLastBookClicked,
  } = useStore();
  return (
    <div className={`lecture-books-wrapper p-5 pl-0 flex-1 max-h-full`}>
      {selectedBooks.length > 0 && (
        <div
          className={`lecture-books-inner overflow-y-auto h-full ${
            selectedBooks.length &&
            "transition duration-300 border-black border bg-gray-300 dark:border-white dark:bg-gray-800 rounded-md"
          }`}
        >
          <div
            className={`list-title rounded-md p-5 mb-5 bg-gray-300 ${stickyTop}`}
          >
            <h2 className={`text-3xl font-bold ${textColorAnimationClass}`}>
              Lista de Lectura
            </h2>
          </div>
          <div className="box-border pb-5 h-full lecture-books">
            <div
              role="selected-books"
              className="pl-5 pr-5 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-2 gap-10 pb-4"
            >
              {selectedBooks.map((v, i) => {
                const selectedBook = books.find(
                  ({ book: { ISBN } }) => ISBN === v
                ) as Book;
                if (!selectedBook) return false;
                const { ISBN, title, cover } = selectedBook.book;
                return (
                  <BookCard
                    key={ISBN}
                    index={lastBookClicked === ISBN ? 0 : i}
                    title={title}
                    imageUrl={cover}
                    showInfo={false}
                    withRemoveBnt={true}
                    onClickHandler={() => {
                      setLastBookClicked(ISBN);
                      setSelectedBooks(selectedBooks.filter((v) => v !== ISBN));
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedBooksSidebar;
