import { Book } from '../types/bookType';
import { Box, Card, CardMedia, Typography } from '@mui/material';

type BookInListProps = {
    book: Book
}

function BookInList({book}: BookInListProps) {
  return (
    <Box sx={{maxWidth: 260}}>
      <Card sx={{ maxWidth: 260, position: "relative", padding: 3 }}>
        <CardMedia
          sx={{ height: 320, borderRadius: 1 }}
          image={book.cover}
          title="green iguana"
        />
      </Card>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: 2}}>
        <Typography variant='overline'>{book.title}</Typography>
        <Typography variant='caption'>{book.author.name}</Typography>
      </Box>
    </Box>
  );
}

export default BookInList