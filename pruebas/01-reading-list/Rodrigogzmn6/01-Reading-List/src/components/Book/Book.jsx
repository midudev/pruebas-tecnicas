export const Book = ({ book, onClick, filter }) => {
  if (book.genre === filter || filter === "All") {
    return (
      <div
        className="library-book cursor-pointer"
        onClick={() => {
          onClick(book.ISBN);
        }}
      >
        <img src={book.cover} className="rounded-2xl" />
      </div>
    );
  }
};
