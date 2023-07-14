import React from 'react';

const Book = ({ title, author, isbn }) => {
  return (
    <div style={{ border: '5px solid #fe8b74' }}>
      <h3>Book</h3>
      <p>ISBN: {isbn}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default Book;