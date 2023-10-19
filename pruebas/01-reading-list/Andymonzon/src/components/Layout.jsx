import { Filter } from './Filter'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout () {
  const location = useLocation()

  return (
    <>
      <div className="w-full min-h-screen h-full bg-zinc-900 text-white">
        <header className='flex justify-between items-center px-10 pt-5'>
          <Filter />
          {
            location.pathname === '/'
              ? <Link to='/list' className='px-2 py-1'>
                <i className="fa-solid fa-bookmark"></i>
              </Link>
              : <Link to='/' className='px-2 py-1'>
                <i className="fa-solid fa-arrow-left text-xl"></i>
              </Link>
         }
        </header>
        <Outlet />
      </div>
    </>
  )
}

export { Layout }
