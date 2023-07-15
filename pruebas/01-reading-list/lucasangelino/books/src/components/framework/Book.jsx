import { FlyOutMenu } from "./FlyOutMenu";

export const Book = ({ book, addToReadingList, removeFromReadingList }) => {
  return (
    <div className="h-96 rounded-lg relative">
      <FlyOutMenu />
      <img
        src={book.cover}
        className="rounded-lg object-fit h-full w-full"
        alt={`Cover image from ${book.title} book`}
      />
      <div className="flex flex-col p-2 absolute bottom-0">
        <button className="bg-blue-100" onClick={() => addToReadingList(book)}>
          Add to list
        </button>
        <button
          className="bg-blue-100"
          onClick={() => removeFromReadingList(book.title)}
        >
          Remove from list
        </button>
      </div>
    </div>
  );
};

export default Book;
