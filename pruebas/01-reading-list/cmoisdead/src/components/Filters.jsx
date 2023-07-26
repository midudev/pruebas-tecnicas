import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";

const Filter = ({ name, list, handler }) => {
  return (
    <select
      name={name}
      id={name}
      className="rounded-lg border-neutral-800 bg-neutral-900 text-white hover:cursor-pointer hover:border-neutral-800"
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

export const Filters = ({ setBooks }) => {
  const { library, genres } = useBookStore(
    (state) => ({
      library: state.books,
      genres: state.genres,
      // authors: state.authors,
    }),
    shallow,
  );
  const [filtred, setFiltred] = useState([]);

  useEffect(() => {
    setFiltred(library);
  }, [library]);

  const handleChange = (e) => {
    // function to handle all selects filters, by genre or author but can be extended to other filters.
    const { value, name } = e.target;
    const selector = (book) => {
      if (name === "author") return book.author.name;
      return book[name];
    };
    if (value !== "none") {
      const list = library.filter((book) => selector(book.book) === value);
      setFiltred(list);
      return setBooks(list);
    }
    setFiltred(library);
    setBooks(library);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value.length > 0)
      return setBooks(
        filtred.filter(
          ({ book }) =>
            book.title.toLowerCase().includes(value.toLowerCase()) ||
            book.author.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
  };

  return (
    <div className="flex gap-4">
      <Filter name="genre" list={genres} handler={handleChange} />
      {/* <Filter
        name="author"
        list={authors.map((author) => author.name)}
        handler={handleChange}
      /> */}
      <div className="hidden md:block">
        <input
          type="text"
          className="rounded-lg border border-neutral-800 bg-neutral-900 p-2"
          placeholder="Author, Book search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
