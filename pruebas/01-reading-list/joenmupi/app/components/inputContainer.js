'use client'
import { Box, Typography } from '@mui/material'
import styles from '../styles/inputContainer.style'

const InputContainer = ({ title, children }) => (
  <Box sx={styles.boxInput}>
    <Typography variant='h6' noWrap sx={styles.textTitleInput}>
      {title}
    </Typography>
    {children}
  </Box>
)

export default InputContainer
