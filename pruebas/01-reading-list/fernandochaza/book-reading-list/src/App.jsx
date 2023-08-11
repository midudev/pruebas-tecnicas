import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import ReadingList from './components/ReadingList'
import RootLayout from './components/RootLayout'
import SearchPage from './components/SearchPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <SearchPage />
        },
        {
          path: '/my-list',
          element: <ReadingList />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
