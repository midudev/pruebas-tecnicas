import { bookStore } from "../state/bookStore";

export const BooksCounter = () => {
  const { booksOnList, booksNotOnList } = bookStore();

  return (
    <section className="flex m-5 ml-10 gap gap-2">
      <span className="badge badge-primary text-base p-5">
        Books available:{booksNotOnList}
      </span>
      <span className="badge badge-secondary text-base p-5">
        Books on list:{booksOnList}
      </span>
    </section>
  );
};
