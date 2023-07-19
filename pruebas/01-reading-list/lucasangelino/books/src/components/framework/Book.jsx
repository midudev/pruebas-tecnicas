import { FlyOutMenu } from "./FlyOutMenu";

export const Book = ({ book, addToReadingList, removeFromReadingList }) => {
  return (
    <div className="w-48 rounded-lg relative hover:scale-110 duration-200">
      <FlyOutMenu />
      <img
        src={book.cover}
        className="rounded-lg object-fit"
        alt={`Cover image from ${book.title} book`}
      />
    </div>
  );
};

export default Book;
