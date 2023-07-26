/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect } from 'react'
import {
  Button,
  Box,
  Slider,
  Select,
  MenuItem,
  Typography,
  Grid,
  Tooltip,
  Grow
} from '@mui/material'
import { BookmarkAdd, BookmarkRemove } from '@mui/icons-material'
import booksData from '../../../01-reading-list/books.json'
import BookInfoC from './components/bookInfo'
import BookItemC from './components/bookItem'
import InputContainerC from './components/inputContainer'
import styles from './styles/page.style'

export default function Home () {
  const genders = ['Todas', ...new Set(booksData.library.map(item => item.book.genre))]
  const PageMutiplicator = Math.trunc(Math.max(...booksData.library.map(item => item.book.pages)) / 100)
  const [openDialogFlag, setOpenDialogFlag] = useState(false)
  const [bookSelected, setbookSelected] = useState({})
  const [firstLoading, setFirstLoading] = useState(true)
  const [unselectedBooks, setUnselectedBooks] = useState([])
  const [selectedBooks, setSelectedBooks] = useState([])
  const [genre, setGenre] = useState('Todas')
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const prevLocal = window.localStorage.getItem('selectedBooks')
    const selectedBooksAux = (prevLocal) ? JSON.parse(prevLocal) : []

    setSelectedBooks(selectedBooksAux)
    setFirstLoading(false)

    const manejarCambio = (e) => {
      if (e.key === 'selectedBooks') setSelectedBooks(JSON.parse(e.newValue))
    }

    window.addEventListener('storage', manejarCambio)

    return () => {
      window.removeEventListener('storage', manejarCambio)
    }
  }, [])

  useEffect(() => {
    let unselectedBooksAux = getUnselectedBooks(selectedBooks)

    if (genre !== 'Todas') unselectedBooksAux = unselectedBooksAux.filter(x => x.book.genre === genre)
    if (pages !== 0) unselectedBooksAux = unselectedBooksAux.filter(x => x.book.pages > pages * PageMutiplicator)
    setUnselectedBooks(unselectedBooksAux)
  }, [genre, pages, selectedBooks])

  const handleOpenDialog = (book) => {
    setbookSelected(book)
    setOpenDialogFlag(true)
  }

  const handleCloseDialog = () => {
    setOpenDialogFlag(false)
  }

  const getUnselectedBooks = (selectedBooksAux) => {
    if (selectedBooksAux.length > 0) {
      return booksData.library.filter(x => !selectedBooksAux.map(item => item.book.ISBN).includes(x.book.ISBN))
    } else return booksData.library
  }

  const handleChangePagesInput = (e) => {
    setPages(e.target.value)
  }

  const handleChangeGenreInput = (e) => {
    setGenre(e.target.value)
  }

  const handleAddBook = (e, book) => {
    e.stopPropagation()
    setSelectedBooks([book, ...selectedBooks])
    window.localStorage.setItem('selectedBooks', JSON.stringify([book, ...selectedBooks]))
  }

  const handleCancelBook = (e, book) => {
    const newSelectedBooks = selectedBooks.filter(x => x !== book)

    e.stopPropagation()
    setSelectedBooks(newSelectedBooks)
    window.localStorage.setItem('selectedBooks', JSON.stringify(newSelectedBooks))
  }

  if (firstLoading) return null
  return (
    <>
      <BookInfoC book={bookSelected} onClose={handleCloseDialog} open={openDialogFlag}/>
      <Box sx={styles.boxPrincipal}>
        <Box sx={styles.boxLeft}>
          <Typography variant='h3'>
            {`${unselectedBooks.length} ${unselectedBooks.length < 2 ? 'libro disponible' : 'libros disponibles'} `}
          </Typography>
          <Typography variant='body1' sx={[styles.textBookList, selectedBooks.length === 0 ? styles.textBookListTraparent : {}]}>
            {`${selectedBooks.length} en lista de lectura`}
          </Typography>
          <Box sx={styles.boxInputs}>
            <InputContainerC title='Filtrar por páginas'>
              <Tooltip title={`Buscar libros sobre las ${pages * PageMutiplicator} páginas`}>
                <Slider aria-label='pages-slider' value={pages} onChange={handleChangePagesInput} />
              </Tooltip>
            </InputContainerC>
            <InputContainerC title='Filtrar por género'>
              <Select
                sx={styles.select}
                variant='standard'
                value={genre}
                label='genre'
                onChange={handleChangeGenreInput}
              >
                {genders.map((item, index) => (
                  <MenuItem key={`menu-item-gen-${index}`} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </InputContainerC>
          </Box>
          <Box sx={styles.boxContainerBook}>
            <Grid container sx={styles.gridContainerBooksLeft}>
              {unselectedBooks.map((item, index) => (
                <BookItemC key={`key-unselected-book-${index}`} xs={3} item={item} onClick={() => handleOpenDialog(item.book)}>
                  <Tooltip title={`Agregar ${item.book.title} a la lista de lectura`}>
                    <Button onClick={(e) => handleAddBook(e, item) } variant='contained' sx={styles.button}>
                      <BookmarkAdd/>
                    </Button>
                  </Tooltip>
                </BookItemC>
              ))}
            </Grid>
          </Box>
        </Box>
        <Grow in={selectedBooks.length > 0} timeout={200}>
          <Box sx={styles.boxRight}>
            <Typography variant='h3'>
              Lista de lectura
            </Typography>
            <Grid container sx={styles.gridContainerBooksRight}>
              {selectedBooks.map((item, index) => (
                <BookItemC key={`key-selected-book-${index}`} xs={6} item={item} onClick={() => handleOpenDialog(item.book)}>
                  <Tooltip title={`Eliminar ${item.book.title} de la lista de lectura`}>
                    <Button onClick={(e) => handleCancelBook(e, item)} variant='contained' color='error' sx={styles.button}>
                      <BookmarkRemove/>
                    </Button>
                  </Tooltip>
                </BookItemC>
              ))}
            </Grid>
          </Box>
        </Grow>
      </Box>
    </>
  )
}
