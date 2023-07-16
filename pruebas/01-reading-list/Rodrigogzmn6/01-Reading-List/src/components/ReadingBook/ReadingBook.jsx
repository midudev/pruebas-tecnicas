import Cross from "../../assets/icon-cross.svg";
export const ReadingBook = ({ book, index, onClick }) => {
  return (
    <div>
      <img src={book.cover} />
      <img
        className="cursor-pointer"
        src={Cross}
        onClick={() => {
          onClick(book.ISBN);
        }}
      />
    </div>
  );
};
