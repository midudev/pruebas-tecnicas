'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import config from './configStyles'
import 'typeface-montserrat'

const theme = createTheme({
  typography: {
    fontWeightRegular: 300,
    fontFamily: 'montserrat',
    allVariants: {
      color: config.fontcolor
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: config.background
    },
    primary: {
      main: config.primary
    }
  }
})

export default responsiveFontSizes(theme)
