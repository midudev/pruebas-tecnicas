import App from '../App.tsx'
import { ErrorPage } from '../pages/ErrorPage.tsx'
import { itemRoutes } from './itemRoutes.routes.tsx'
import { resultSearchRoutes } from './resultSearch.routes.tsx'

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/items',
        async lazy () {
          const { Header } = await import('../components/Header.tsx')
          return {
            element: <Header />
          }
        },
        children: [
          resultSearchRoutes,
          itemRoutes
        ]
      }
    ]
  }
]
