import { useEffect, useState } from "react";
import { Book } from "./Book";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";
import { BsBookmark, BsEye } from "react-icons/bs";

export const Current = () => {
  const [visible, setVisible] = useState(false);
  const books = useBookStore((state) => state.current, shallow);

  useEffect(() => {
    const current = JSON.parse(window.localStorage.getItem("current"));
    useBookStore.setState({ current });
  }, []);

  const handleView = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className="fixed bottom-0 right-0 z-10 m-2 rounded-full bg-neutral-900 p-4 text-xl text-neutral-500 drop-shadow-md hover:text-neutral-300 md:hidden"
        onClick={handleView}
      >
        <BsEye />
      </button>
      <div
        className={`${
          !visible ? "hidden" : "fixed bottom-0 top-0"
        } m-5 w-11/12 overflow-y-auto rounded-lg bg-neutral-900 p-3 md:static md:m-0 md:block md:h-full md:w-5/12`}
      >
        <h1 className="my-2 text-center text-xl font-bold">
          {books?.length || 0} Books on Reading List
        </h1>
        <div className="flex flex-wrap content-start justify-center gap-4">
          {books?.length ? (
            books.map((book, i) => <Book book={book} key={i} added />)
          ) : (
            <div className="my-72 flex flex-col content-center items-center justify-center gap-4 text-neutral-500">
              <BsBookmark className="text-6xl" />
              <p className="text-sm">no books on reading list</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
