/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import {
  Button,
  Box,
  Chip,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
import { MenuBook } from '@mui/icons-material'
import styles from '../styles/bookInfo.style'

const BookInfo = ({ book, onClose, open }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle sx={styles.textTitleInfo}>
      {book.title}
    </DialogTitle>
    <DialogContent>
      <Box sx={styles.boxChip}>
        <Chip size='small' label={book.genre} variant='filled' />
        <Chip size='small' label={`${book.pages} páginas`} variant='filled' />
      </Box>
      <DialogContentText variant='body1' sx={styles.textSubtitleInfo}>
        Synopsis
      </DialogContentText>
      <DialogContentText variant='caption'>
        {book.synopsis}
      </DialogContentText>
      <DialogContentText variant='body1' sx={styles.textSubtitleInfo}>
        Fecha de publicación
      </DialogContentText>
      <DialogContentText variant='caption'>
        {book.year}
      </DialogContentText>
      <DialogContentText variant='body1' sx={styles.textSubtitleInfo}>
        Autor
      </DialogContentText>
      <DialogContentText variant='caption'>
        {book?.author?.name}
      </DialogContentText>
      <DialogContentText variant='body1' sx={styles.textSubtitleInfo}>
        Otros libros del autor
      </DialogContentText>
      <Box sx={styles.boxChip}>
        {book?.author?.otherBooks?.map((item, index) => (
          <Chip key={`other-book-key-${index}`} size='small' label={item} variant='filled' />
        ))}
      </Box>
    </DialogContent>
    <DialogActions sx={styles.DialogAction}>
      <Tooltip title='Leer ahora'>
        <Button disabled variant='contained' sx={[styles.button, styles.buttonRead]}>
          <MenuBook/>
        </Button>
      </Tooltip>
    </DialogActions>
  </Dialog>
)

export default BookInfo
