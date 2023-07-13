import React from 'react';
import './BookComponent.css'

const BookComponent = ({ title, author, genre, image, onClick, isBookToRead, isBookRead }) => {
  const handleClick = () => {
    if (isBookRead) {
      const cardElement = document.getElementById(title);
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          onClick();
        }, 500);
      }
    } else {
      onClick();
    }
  };

  return (
    <div
      id={title}
      className={`book-card ${isBookToRead ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <img src={image} alt={title} className="book-cover" />
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">By {author}</p>
        <p className="book-genre">{genre}</p>
      </div>
    </div>
  );
};

export default BookComponent;
