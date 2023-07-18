import { bookStore } from "../state/bookStore";
export const Card = (book) => {
  const { title, pages, genre, synopsis, cover, ISBN, inReadingList } = book;
  const { addBook, removeBook } = bookStore();

  const handleClick = () => {
    if (inReadingList) {
      removeBook(ISBN);
    } else {
      addBook({ book });
    }
  };

  return (
    <article className={`card bg-base-100 shadow-xl border border-neutral`}>
      <figure>
        <img
          src={cover}
          alt=""
          className="w-48 h-72 m-5 rounded border border-neutral"
        />
      </figure>

      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p>{genre + " " + pages}</p>
        <p>{synopsis}</p>
        <label
          className={`badge ${
            inReadingList ? "badge-secondary" : "badge-base-100"
          } text-lg p-4`}
        >
          {`${inReadingList ? "On list" : "Not on list"}`}
        </label>
        <div className="card-actions justify-end">
          <button
            onClick={handleClick}
            className={`${inReadingList ? "btn btn-error" : "btn btn-primary"}`}
          >
            {inReadingList ? "Remove" : "Add to Read"}
          </button>
        </div>
      </div>
    </article>
  );
};
