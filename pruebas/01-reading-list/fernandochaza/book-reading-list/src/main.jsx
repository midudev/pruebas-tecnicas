import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme/themes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
)
