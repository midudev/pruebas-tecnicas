import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";
import { AuthorCard } from "./AuthorCard";

export const Authors = () => {
  const authors = useBookStore((state) => state.authors, shallow);

  return (
    <div id="authors">
      <h2 className="text-center text-2xl font-bold text-rose-700">Authors</h2>
      <div className="my-2 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {authors?.map((author, i) => (
          <AuthorCard key={i} name={author.name} />
        ))}
      </div>
    </div>
  );
};
