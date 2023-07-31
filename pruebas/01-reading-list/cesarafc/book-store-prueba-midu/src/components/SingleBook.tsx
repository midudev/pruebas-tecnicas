import { Box, Typography } from '@mui/material';
import { Book } from '../types/bookType';

type SingleBookProps = {
    book: Book
}

function SingleBook({book}: SingleBookProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: 'column', flexWrap: "wrap" }}>
        <img src={book.cover} alt={book.title} width={200} />
        <Typography variant={'caption'}>{book.title}</Typography>
        <Typography variant={'caption'}>{book.year}</Typography>
    </Box>
  )
}

export default SingleBook