import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import theme from './src/logic/theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

const root = createRoot(document.getElementById('app'))

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
)
