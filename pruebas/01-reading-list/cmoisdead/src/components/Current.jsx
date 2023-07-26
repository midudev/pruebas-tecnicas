import { useEffect, useState } from "react";
import { Book } from "./Book";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";

export const Current = () => {
  const [visible, setVisible] = useState(true);
  const books = useBookStore((state) => state.current, shallow);

  useEffect(() => {
    const current = JSON.parse(window.localStorage.getItem("current"));
    useBookStore.setState({ current });
  }, []);

  return (
    <div className="hidden h-full overflow-y-auto rounded-lg bg-neutral-900/75 p-3 md:block md:w-5/12">
      <h1 className="my-2 text-center text-xl font-bold">
        {books?.length || 0} Books on Reading List
      </h1>
      <div className="flex flex-wrap content-start justify-center gap-4">
        {books.length
          ? books?.map((book, i) => <Book book={book} key={i} added />)
          : "no books on reading list"}
      </div>
    </div>
  );
};
