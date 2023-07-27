import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export default function App () {
  return (
    <div className='min-h-screen bg-rhino-950 text-white'>
      <Header />
      <div className='max-w-6xl mx-auto flex flex-col'>
        <Outlet />
      </div>
    </div>
  )
}
