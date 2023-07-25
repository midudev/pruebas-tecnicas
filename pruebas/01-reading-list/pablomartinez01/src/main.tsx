import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppContextProvider } from './context/AppContext.tsx'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
