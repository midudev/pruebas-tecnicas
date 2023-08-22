import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  loading,
  themeAtom,
  userCompletedBooks,
  userReadingList
} from './context/atoms'

import { Toaster } from 'sonner'

import { ThemeProvider } from 'styled-components'

import RootPage from './pages/RootPage'
import ErrorPage from './pages/ErrorPage'
import ReadingList from './pages/ReadingList'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import CompletedBooks from './pages/CompletedBooks'

import { getUserReadingList } from './Utils/getUserReadingList'
import { getUserCompletedBooks } from './Utils/getUserCompletedBooks'
import { useEffect } from 'react'
import { darkTheme } from './theme/themes'

function App() {
  const currentTheme = useAtomValue(themeAtom)
  const setReadingList = useSetAtom(userReadingList)
  const setCompletedBooks = useSetAtom(userCompletedBooks)
  const [, setIsLoading] = useAtom(loading)

  useEffect(() => {
    setIsLoading(true)
    const currentReadingList = getUserReadingList()
    setReadingList(currentReadingList)

    const currentCompletedBooks = getUserCompletedBooks()
    setCompletedBooks(currentCompletedBooks)
    setIsLoading(false)
  }, [setReadingList, setCompletedBooks, setIsLoading])

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
      <Toaster
        position='top-center'
        theme={currentTheme === darkTheme ? 'dark' : 'light'}
        richColors
        closeButton
      />
    </ThemeProvider>
  )
}

export default App
