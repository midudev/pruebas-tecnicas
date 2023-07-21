import { Link } from 'wouter'

interface Props {
  show: boolean
  toggleMenu: () => void
}

export const MobileMenu = ({ show, toggleMenu }: Props) => {
  return (
      <div className={`transition-[top] duration-500 relative p-6 rounded-b border-2 border-title bg-bg-alt text-end ${show ? 'top-0' : 'top-[-360px]'} `}>
        <ul>
          <li className="p-2 py-4 font-semibold" onClick={toggleMenu}>
            <Link className="hover:underline hover:underline-offset-4" href='./lista-lectura'>Lista de lectura</Link>
          </li>
          <li className='p-2 py-4 font-semibold' onClick={toggleMenu}>
            <Link className="hover:underline hover:underline-offset-4" href='./generos'>Géneros</Link>
          </li>
          <li className='p-2 py-4 font-semibold' onClick={toggleMenu}>
            <Link className="hover:underline hover:underline-offset-4" href='./autores'>Autores</Link>
          </li>
        </ul>
      </div>
  )
}
