import { Book } from '../types/bookType';
import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import '../styles/BookInList.css';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useBooksStore } from '../store/books';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import toast from 'react-hot-toast'

type BookInListProps = {
    book: Book
}

function BookInList({book}: BookInListProps) {

  const {addToList, removeFromList, cartStore} = useBooksStore(state => state);

  const handleAddtoList = () => {
    addToList(book);
    toast.success('Added!')
  }

  const handleRemove = () => {
    removeFromList(book.ISBN)
    toast.success('Removed! 💀')
  }

  const isInList = () => {
    return cartStore.find( (bookList) => bookList.ISBN === book.ISBN);
  }

  return (
    <Box>
      <Card sx={{ maxWidth: 260, position: "relative", padding: 3 }}>
        <CardMedia
          sx={{ height: 320, borderRadius: 1 }}
          image={book.cover}
          title={`Cover: ${book.title}`}
        />

        <Box className={`book-card ${isInList() && "book-in-list" }`} sx={{ borderRadius: 1, }}>

          {isInList() ? (
            <IconButton title='Remove' size='large' aria-label="removeFromList" onClick={handleRemove}>
              <PlaylistAddCheckIcon color="success" />
            </IconButton>
          ) : (
            <IconButton title='Add' size='large' aria-label="addToList" onClick={handleAddtoList}>
              <PlaylistAddIcon sx={{ color: "#fff" }} />
            </IconButton>
          )}

        </Box>

      </Card>
      <Box
        sx={{
          width: 260,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingY: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="overline" sx={{ fontWeight: 400, fontSize: 15 }}>
          {book.title}
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 200, fontSize: 14 }}>
          {book.author.name}
        </Typography>
      </Box>
    </Box>
  );
}

export default BookInList