import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from 'styled-components'

import RootPage from './pages/RootPage'
import ErrorPage from './pages/ErrorPage'
import ReadingList from './pages/ReadingList'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import CompletedBooks from './pages/CompletedBooks'
import { useAtomValue } from 'jotai'
import { themeAtom } from './context/atoms'

function App() {
  const currentTheme = useAtomValue(themeAtom)

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

  return (
    <ThemeProvider theme={currentTheme}>
      <RouterProvider router={router} />
      <Toaster position='top-center' theme='dark' richColors />
    </ThemeProvider>
  )
}

export default App
