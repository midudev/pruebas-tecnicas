import { Box, Container, Typography } from '@mui/material';
import { useBooksStore } from './store/books';
import { Book } from './types/bookType';
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy, arrayMove, useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


type SingleProps = {
    book: Book
}
function SingleCard ({book}: SingleProps) {

    
    const { attributes, listeners, setNodeRef, transform, transition, data } =
    useSortable({
      id: book.ISBN,
    });
    console.log("### ~ data:", data);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: 'beige',
        padding: '10px',

    }

    return (
        <Box
        {...attributes}
        {...listeners}
        ref={setNodeRef}
        style={style}
        // sx={{backgroundColor: 'beige', padding: 1, }}
        >
            <h2>{book.title}</h2>
        </Box>
    )
}

function SecondApp() {
    const booksStore = useBooksStore(state => state.booksStore);  
    const books = booksStore.map((item, index) => {
      // return {...item.book, id: index}
      return item.book
    });

    const handleDragEnd = (e: DragEndEvent) => {
        // console.log(e.active)
    }

  return (
    <Container>
      <Typography variant="h1">My drag app</Typography>

    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    >


    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <SortableContext
        // id='book'
            // items={books}
            items={books.map(i => i.ISBN)}
            strategy={verticalListSortingStrategy}
            >

            {books.map((book) => (
            <SingleCard key={book.ISBN} book={book} />
            ))}
        </SortableContext>
      </Box>
    </DndContext>


    </Container>
  );
}

export default SecondApp