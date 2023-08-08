import { useState } from "react";
import BookFilter from "./components/BookFilter";
import ReadList from "./components/ReadList";
import { useBooksStore } from "./store/books";
import { Container, Box, Typography } from '@mui/material';
// import { Library } from "./types/bookType";
import BookInList from "./components/BookInList";
import './index.css';
import BookCart from "./components/BookCart";
import { SortableContext, arrayMove, rectSortingStrategy } from "@dnd-kit/sortable";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { Toaster } from 'react-hot-toast';
import useDebounce from "./hooks/useDebounce";

// type filterParams = {
//   books: Library[],
//   pagestoFilter?: number,
//   genre?: string,
// } 

function App() {

  const {booksStore, cartStore, updateIndex} = useBooksStore(state => state); 

  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce<string>(search, 500);

  // const filterBooks = ({books, pagestoFilter, genre}: filterParams) => {
  //   if (pagestoFilter && genre) {
  //     return books.filter(({book}) => book.genre === genre && book.pages >= pagestoFilter );
  //   }
  //   if(pagestoFilter) {
  //     return books.filter( ({book}) => book.pages >= pagestoFilter)
  //   }
  //   if(genre) {
  //     return books.filter( ({book}) => book.genre === genre )
  //   }
  //   return books
  // }

  const onSearchChange = (term: string) => {
    setSearch(term)
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
    setSearch('')
  }

  const handleDragEnd = ({active, over}: DragEndEvent) => {
    if (active.id !== over?.id) {
      const oldIndex = cartStore.findIndex((book) => book.ISBN === active.id);
      const newIndex = cartStore.findIndex((book) => book.ISBN === over?.id);
      const newArray = arrayMove(cartStore, oldIndex, newIndex);
      updateIndex(newArray);
    }
  }

    const filteredBooks = booksStore.filter( ({book}) => {
      const todoText = book.title.toLowerCase();
      const searchText = debouncedSearch.toLowerCase();
      
      const titleMatch = debouncedSearch ? todoText.includes(searchText) : true;
      const genreMatch = genre ? book.genre === genre : true;
      const pagesMatch = pages ? book.pages >= pages : true;
      
      return titleMatch && genreMatch && pagesMatch;
  });

  return (
    <Container
      sx={{ width: "100vw", height: "100vh", backgroundColor: "#f3f7fa" }}
      maxWidth="xl"
    >
      <BookFilter
        genre={genre}
        pages={pages}
        search={search}
        onSearchChange={onSearchChange}
        resetFilters={resetFilters}
        onGenreChange={onGenreChange}
        onPagesChange={onPagesChange}
      />

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <ReadList listLenght={cartStore.length}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, paddingY: 2 }}>
            <SortableContext
              items={cartStore.map((i) => i.ISBN)}
              strategy={rectSortingStrategy}
            >
              {cartStore.map((book) => (
                <BookCart key={book.ISBN} book={book} />
              ))}
            </SortableContext>
          </Box>
        </ReadList>
      </DndContext>

      <Typography variant="caption">Results: {filteredBooks.length}</Typography>
      <Box component="section" className="books-library">
        {filteredBooks.map(({ book }) => (
          <BookInList key={book.ISBN} book={book} />
        ))}
      </Box>

      <Toaster />
    </Container>
  );
}

export default App
