import "./index.css";

const FavoriteBook = ({ url, title, onHandleChange }) => {
  return (
    <div className="book_container">
      <img className="book_container-image" src={url} alt={title} />
      <button className="book_container-button" onClick={onHandleChange}>
        X
      </button>
    </div>
  );
};

export default FavoriteBook;
