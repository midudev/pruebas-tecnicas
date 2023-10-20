import { Box, Button, Typography } from '@mui/material';
import { Book } from '../types/bookType';
import { useBooksStore } from '../store/books';


type SingleBookProps = {
    book: Book
}

function SingleBook({book}: SingleBookProps) {

  const {addToList, removeFromList, cartStore} = useBooksStore(state => state);

  const handleAddtoList = () => {
    addToList(book);
  }

  const handleRemove = () => {
    removeFromList(book.ISBN)
  }

  const isInList = () => {
    return cartStore.find( (bookList) => bookList.ISBN === book.ISBN);
  }



  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }} >

     
      <img src={book.cover} alt={book.title} width={200} height={300} />
      <Typography variant={"caption"}>{book.title}</Typography>
      <Typography variant={"overline"}>{book.author.name}</Typography>
      <Typography variant={"caption"}>{book.year}</Typography>

      {isInList() ? (
        <Button onClick={handleRemove} variant="text">
          Eliminar de la lista
        </Button>
      ) : (
        <Button onClick={handleAddtoList} variant="text">
          Agregar a la lista
        </Button>
      )}
    </Box>
  );
}

export default SingleBook