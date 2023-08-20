import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootPage from './pages/RootPage'
import ErrorPage from './pages/ErrorPage'
import ReadingList from './pages/ReadingList'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import CompletedBooks from './pages/CompletedBooks'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/search',
          element: <SearchPage />
        },
        {
          path: '/my-list',
          element: <ReadingList />
        },
        {
          path: '/completed-books',
          element: <CompletedBooks />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
