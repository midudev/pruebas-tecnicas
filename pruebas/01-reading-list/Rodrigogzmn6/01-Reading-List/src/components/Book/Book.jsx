export const Book = ({ book, onClick }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        onClick(book.ISBN);
      }}
    >
      <img src={book.cover} />
    </div>
  );
};
