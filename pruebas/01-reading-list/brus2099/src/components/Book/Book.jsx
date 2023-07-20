import React from 'react';

const Book = ({ title, author, isbn, cover }) => {
  return (
    <div style={{ border: '5px solid #b5b5b5' }}>
      <h3>Book</h3>
      <img src={cover} alt={title} 
        style={{
          width: '100px',
        }}
      />
      <p>ISBN: {isbn}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default Book;