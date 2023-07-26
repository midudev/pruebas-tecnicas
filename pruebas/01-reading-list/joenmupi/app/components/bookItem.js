'use client'
import { Box, Typography, Grid } from '@mui/material'
import styles from '../styles/bookItem.style'

const BookItem = ({ item, xs, children, onClick }) => (
  <Grid item xs={xs} sx={styles.gridItemBook}>
    <Box sx={styles.boxItemBookContainer}>
      <Box sx={styles.boxImgBackground(item.book.cover)}>
        <Box sx={styles.boxInfo} onClick={onClick}>
          <Box sx={styles.boxButtonContainer}>
            {children}
          </Box>
          <Box sx={styles.boxTitleBookContainer}>
            <Typography variant='caption' sx={styles.textTitleBook}>
              {item.book.title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Grid>
)

export default BookItem
