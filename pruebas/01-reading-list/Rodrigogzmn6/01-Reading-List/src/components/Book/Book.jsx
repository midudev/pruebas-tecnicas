export const Book = ({ book, onClick, filter }) => {
  if (
    (book.genre === filter.gender || filter.gender === "All") &&
    book.pages >= filter.minPages &&
    book.title.toLowerCase().includes(filter.title.toLowerCase())
  ) {
    return (
      <div
        className="library-book cursor-pointer"
        onClick={() => {
          onClick(book.ISBN);
        }}
      >
        <img src={book.cover} className="rounded-lg xl:rounded-2xl" />
      </div>
    );
  }
};
