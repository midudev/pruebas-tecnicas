import { Book } from "./Book";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";

export const List = () => {
  const { library, current } = useBookStore(
    (state) => ({
      library: state.books,
      current: state.current,
    }),
    shallow,
  );

  return (
    <div className="w-full md:w-11/12">
      <h1 className="my-3 text-center text-2xl font-bold">
        {library?.length - current?.length || 0} Books on Library
      </h1>
      <div className="flex flex-wrap content-start justify-center gap-4 md:justify-start">
        {library?.map(({ book }, i) => (
          <Book book={book} key={i} />
        ))}
      </div>
    </div>
  );
};
