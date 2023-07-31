import BookFilter from "./components/BookFilter";
import ReadList from "./components/ReadList";
import SingleBook from "./components/SingleBook";
import { useBooksStore } from "./store/books";
import { Container, Box } from '@mui/material';

function App() {

  const {booksStore} = useBooksStore(state => state);  

  return (
    <Container disableGutters>
      <h1>Libros disponibles: {booksStore.length}</h1>
      <h4>Libros en lista de lectura: {0}</h4>

    <BookFilter />

      <ReadList />

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, padding: 2 }}>
        {booksStore.map(({ book }) => (
          <SingleBook key={book.title} book={book} />
        ))}
      </Box>
    </Container>
  );
}

export default App
