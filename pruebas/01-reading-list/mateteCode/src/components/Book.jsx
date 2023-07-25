const Book = ({ book, onClick }) => {
  return (
    <li>
      <a href="#">
        <div
          className="book"
          style={{ backgroundImage: `url(${book.book.cover})` }}
          onClick={onClick}
        ></div>
      </a>
    </li>
  );
};
export default Book;
