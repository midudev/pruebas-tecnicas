export const Book = ({ book, addToReadingList, removeFromReadingList }) => {
  return (
    <div className="bg-gray-100 rounded-lg">
      <img src={book.cover} alt={`Cover image from ${book.title} book`} />
      <div className="flex flex-col p-2">
        <button onClick={() => addToReadingList(book)}>Add to list</button>
        <button onClick={() => removeFromReadingList(book.title)}>
          Remove from list
        </button>
      </div>
    </div>
  );
};

export default Book;
