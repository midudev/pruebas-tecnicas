import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";

const Filter = ({ name, list, handler }) => {
  return (
    <select
      name={name}
      id={name}
      className="rounded-lg border-neutral-900 bg-neutral-900 text-white hover:cursor-pointer hover:border-neutral-800"
      onChange={handler}
    >
      <option value="none" defaultValue={true}>
        all {name}s
      </option>
      {list.map((genre, i) => (
        <option value={genre} key={i}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export const Filters = ({ _books, setBooks }) => {
  const { library, genres, authors } = useBookStore(
    (state) => ({
      library: state.books,
      genres: state.genres,
      authors: state.authors,
    }),
    shallow,
  );

  const handleChange = (e) => {
    const { value, name } = e.target;
    const selector = (book) => {
      if (name === "author") return book.author.name;
      return book[name];
    };
    if (value !== "none")
      return setBooks(library.filter((book) => selector(book.book) === value));
    setBooks(library);
  };

  return (
    <div className="flex gap-4">
      <Filter name="genre" list={genres} handler={handleChange} />
      <Filter
        name="author"
        list={authors.map((author) => author.name)}
        handler={handleChange}
      />
    </div>
  );
};
