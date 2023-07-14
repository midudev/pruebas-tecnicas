import { Filter } from './Filter'
import { Link, Outlet } from 'react-router-dom'

function Layout () {
  return (
    <>
      <div className="w-full min-h-screen h-full bg-zinc-900 text-white">
        <header className='flex justify-between items-center px-10 pt-5'>
          <Filter />
          <Link to='/list' className='px-2 py-1'>
            <i className="fa-solid fa-bookmark"></i>
          </Link>
        </header>
        <Outlet />
      </div>
    </>
  )
}

export { Layout }
