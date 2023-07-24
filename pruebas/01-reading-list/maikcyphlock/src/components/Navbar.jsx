import { useContext } from 'react'
import { SidebarContext } from '../hooks/useSidebar'
import { Book, Github, Linkedin } from './LucyIcons'
function Navbar () {
  const [, setVisible] = useContext(SidebarContext)
  return (
    <nav className="flex sticky top-0 bg-slate-50 dark:bg-gray-800 dark:border-gray-600 border-b border-gray-200 text-black  dark:text-white p-2 gap-5 justify-center ">
      <button onClick={() => setVisible()} title='Reading list' className='flex hover:bg-green-400 dark:hover:bg-green-600  active:bg-green-800 p-2 rounded-md'><Book/> <span></span></button>
      <a className='hover:bg-green-400 dark:hover:bg-green-600 p-2 rounded-md' href="https://github.com/maikCyphlock/pruebas-tecnicas-mk" target='_blank' rel='noreferrer'><Github/></a>
      <a className='hover:bg-green-400 dark:hover:bg-green-600 p-2 rounded-md' href="https://www.linkedin.com/in/maikol-aguilar/" target='_blank' rel='noreferrer'><Linkedin/></a>
    </nav>
  )
}

export default Navbar
