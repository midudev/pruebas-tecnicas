import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ItemsListProduct from './components/ItemsProducts/ItemsListProduct.jsx';
import ItemDetailProduct from './components/ItemsProducts/ItemDetailProduct.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([{
  path: "/",
  element:  <App/>
},{
  path: "/items/",
  element: <ItemsListProduct />
},{
  path: "/items/:productId",
  element: <ItemDetailProduct />
},{
  path: "*",
  element: <ErrorPage />
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
