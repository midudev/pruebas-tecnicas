import { Book } from "./Book";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";

export const List = () => {
  const { library, current } = useBookStore((state) => ({
    library: state.books,
    current: state.current,
  }), shallow);

  return (
    <div className="w-11/12">
      <h1 className="text-2xl font-bold capitalize text-center my-3">
        {library?.length - current?.length || 0} on library
      </h1>
      <div className="flex flex-wrap content-start gap-4">
        {library?.map(({ book }, i) => (
          <Book book={book} key={i} />
        ))}
      </div>
    </div>
  );
};
