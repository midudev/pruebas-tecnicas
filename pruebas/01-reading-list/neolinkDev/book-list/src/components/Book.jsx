import PropTypes from 'prop-types';

export function Book({
  ISBN,
  cover,
  title,
  handleAddToReadList,
  handleRemoveFromReadingList,
  isInBookList = true,
}) {
  return (

    <li 
      className={ isInBookList ? 'book-list__li' : 'reading-list__li' }
    >
      <img src={ cover } alt={ title } />
      {
        isInBookList ? (
          <button onClick={() => handleAddToReadList( ISBN )}>+</button>
        ) : (
          <button onClick={() => handleRemoveFromReadingList( ISBN )}>x</button>
        )
      }
    </li>
  );
}

Book.propTypes = {
  ISBN: PropTypes.string,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAddToReadList: PropTypes.func,
  handleRemoveFromReadingList: PropTypes.func,
  isInBookList: PropTypes.bool,
}