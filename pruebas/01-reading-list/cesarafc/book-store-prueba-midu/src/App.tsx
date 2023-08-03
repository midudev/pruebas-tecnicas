import { useState } from "react";
import BookFilter from "./components/BookFilter";
import ReadList from "./components/ReadList";
import SingleBook from "./components/SingleBook";
import { useBooksStore } from "./store/books";
import { Container, Box, Typography, Button } from '@mui/material';
import { Library } from "./types/bookType";
import BookInList from "./components/BookInList";


type filterParams = {
  books: Library[],
  pagestoFilter?: number,
  genre?: string,
} 

function App() {

  const {booksStore, cartStore} = useBooksStore(state => state);  

  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState(0);

  const filterBooks = ({books, pagestoFilter, genre}: filterParams) => {

    if (pagestoFilter && genre) {
      return books.filter(({book}) => book.genre === genre && book.pages >= pagestoFilter);
    }

    if(pagestoFilter) {
      return books.filter( ({book}) => book.pages >= pagestoFilter)
    }
    if(genre) {
      return books.filter( ({book}) => book.genre === genre )
    }

    return books
  }

  const onGenreChange = (newGenre: string) => {
    setGenre(newGenre)
  }
  const onPagesChange = (newPages: number) => {
    setPages(newPages)
  }
  const resetFilters = () => {
    setGenre('')
    setPages(0)
  }


  const filteredBooks = filterBooks({books: booksStore, genre, pagestoFilter: pages})

  return (
    <Container disableGutters>
      <h1>Libros disponibles: {booksStore.length - cartStore.length}</h1>
      <h4>Libros en lista de lectura: {cartStore.length}</h4>

    <BookFilter genre={genre} pages={pages} onGenreChange={onGenreChange} onPagesChange={onPagesChange} />
    <Typography variant="caption" >Results: {filteredBooks.length}</Typography>
    <Button variant="outlined" onClick={resetFilters}>Reset</Button>

      <ReadList>
        {
          cartStore.map( ({book}) => (
            <SingleBook key={book.ISBN} book={book}/>
          ) )
        }
      </ReadList>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, padding: 2 }}>
        {filteredBooks.map(({ book }) => (
          <SingleBook key={book.ISBN} book={book} />
        ))}
      </Box>


        <Box sx={{display: 'flex', flexWrap: "wrap", padding: 2}}>
        {
        booksStore.slice(0,3).map( ({book}) => (
          <BookInList key={book.ISBN} book={book} />
          ))
        }
        </Box>

    </Container>
  );
}

export default App
