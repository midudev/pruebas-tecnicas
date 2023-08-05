import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material';
import SecondApp from './SecondApp.tsx';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Avenir next"', 'Open Sans'
    ].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      {/* <SecondApp /> */}
    </ThemeProvider>
  </React.StrictMode>,
)
