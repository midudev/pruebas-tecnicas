import {
  Link,
  isRouteErrorResponse,
  useNavigate,
  useRouteError
} from 'react-router-dom'
import { ErrorServer500, NotFound404, PageError } from '../icons'

export function ErrorPage () {
  const navigate = useNavigate()
  const error = useRouteError()

  let stausCode:number = 0

  if (isRouteErrorResponse(error)) {
    stausCode = error.status
  }

  return (
    <section className='h-screen flex flex-col justify-center items-center gap-4'>
      <span
        className='text-gray-800'
        role='img'
        aria-hidden='true'
      >
        <PageError />
      </span>

      <div className='flex flex-col items-center gap-2 text-2xl'>
        {
          stausCode === 404
            ? (
              <>
                <p className='font-medium'>Página no encontrada</p>
                <span
                  role='img'
                  aria-hidden='true'
                >
                  <NotFound404 width='75' height='75' />
                </span>
              </>
              )
            : (
              <>
                <p className='font-medium'>Error inesperado</p>
                <span
                  role='img'
                  aria-hidden='true'
                >
                  <ErrorServer500 width='75' height='75' />
                </span>
              </>
              )
        }
      </div>

      <div className='flex flex-col font-medium'>
        <Link to='/' className='text-colorAppBlue text-lg'>
          Volver al inicio
        </Link>
        <button
          onClick={() => navigate(-1)}
          className='text-colorAppBlue text-lg'
        >
          Ir a la página anterior
        </button>
      </div>
    </section>
  )
}
