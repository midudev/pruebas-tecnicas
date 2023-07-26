export const BookList = ({ book, handleReadingList }) => {
  return (
    <article className="book-container">
      <div className="book-cover-container">
        <img
          src={book.book.cover}
          alt={`${book.book.title} + cover`}
          className="book-cover"
        />
      </div>
      <div className="book-info-container">
        <h3 className="book-title">{book.book.title}</h3>
        <h4 className="book-author">{book.book.author.name}</h4>
      </div>
      <button onClick={() => handleReadingList(book.book.ISBN)}>Agregar</button>
    </article>
  );
};
