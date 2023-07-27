import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { FiltersProvider } from './context/filtersContext.jsx'
import { WishlistProvider } from './context/listBookContext.jsx'
import { router } from './router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  </FiltersProvider>
)
