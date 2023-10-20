import { useSortable } from '@dnd-kit/sortable';
import { Book } from '../types/bookType';
import { Box, Card, CardMedia, IconButton } from '@mui/material';
import { CSS } from '@dnd-kit/utilities';
import CancelIcon from '@mui/icons-material/Cancel';
import { useBooksStore } from '../store/books';

type BookCartProps = {
    book: Book
}

function BookCart({book}: BookCartProps) {

  const {removeFromList} = useBooksStore()

  const { attributes, listeners, setNodeRef, transform, transition } =
  useSortable({
    id: book.ISBN,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
}
const handleRemove = () => {
  removeFromList(book.ISBN)
}

  return (
    <Box {...attributes} ref={setNodeRef} style={style} sx={{position: 'relative'}}>
      <Card sx={{ width: 140 }} {...listeners}>
        <CardMedia
          sx={{ height: 220, borderRadius: 1 }}
          component="img"
          alt="green iguana"
          height="140"
          image={book.cover}
        />
      </Card>
      <IconButton
        sx={{position: 'absolute', top: -15, right: -15, }}
        title="Remove"
        size="small"
        aria-label="removeFromList"
        onClick={handleRemove}
      >
        <CancelIcon sx={{backgroundColor: '#fff', borderRadius: '50%'}} color="error" />
      </IconButton>
    </Box>
  );
}

export default BookCart