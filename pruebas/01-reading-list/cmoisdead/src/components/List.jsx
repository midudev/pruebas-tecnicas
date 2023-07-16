import { Book } from "./Book";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";

export const List = () => {
  const { library, current } = useBookStore((state) => ({
    library: state.books,
    current: state.current,
  }), shallow);

  return (
    <div className="w-3/5">
      <h1 className="text-2xl font-bold capitalize">
        {library?.length - current?.length} on library
      </h1>
      <div className="flex flex-wrap content-start gap-4">
        {library.map(({ book }, i) => (
          <Book book={book} key={i} />
        ))}
      </div>
    </div>
  );
};
