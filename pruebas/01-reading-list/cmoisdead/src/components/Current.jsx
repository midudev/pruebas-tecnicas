import { useEffect } from "react";
import { Book } from "./Book";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";

export const Current = () => {
  const books = useBookStore((state) => state.current, shallow);

  useEffect(() => {
    const current = JSON.parse(window.localStorage.getItem("current"));
    useBookStore.setState({ current });
  }, []);

  return (
    <div className="bg-neutral-900/75 w-2/5 rounded">
      <h1 className="text-2xl font-bold capitalize">
        {books?.length} on reading list
      </h1>
      <div className="flex flex-wrap content-start justify-center gap-4">
        {books?.map((book, i) => (
          <Book book={book} key={i} added />
        ))}
      </div>
    </div>
  );
};
