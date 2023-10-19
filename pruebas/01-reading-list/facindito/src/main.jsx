import ReactDOM from 'react-dom/client'
import './index.css'
import { FiltersProvider } from './context/filtersContext.jsx'
import { WishlistProvider } from './context/listBookContext.jsx'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </FiltersProvider>
)
