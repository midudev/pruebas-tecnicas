

export function Book({ 
  ISBN, 
  cover, 
  title, 
  handleAddToReadList, 
  handleRemoveFromReadingList, 
  isInBookList = true 
}) {


  // function handleAddToReadList(){
  //   console.log('Se agregó:', title)
  // }

  return (
    <li className={ isInBookList ? 'book-list__li' : 'reading-list__li' }>
      <img src={ cover } alt={ title } />
      {
        isInBookList ? (
          <button
            onClick={ () => handleAddToReadList ( ISBN ) }
          >
            +
          </button>
  
        ) : (
          <button
            onClick={ () => handleRemoveFromReadingList( ISBN ) }
          >
            x
          </button>
        )

      }
    </li>
  );
}
