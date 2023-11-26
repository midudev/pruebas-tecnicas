//COMPONENTS
import { Bell, Heart, GitHub } from './icons'

export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex h-16 w-full   items-center  justify-between  border-b-2   border-[#e1e1e17b] bg-white px-12'>
      <span className='text-xl'>GOODREADS</span>

      <ul className='flex gap-2'>
        <li>
          <a
            className='text-orange-600'
            href='https://github.com/danielcgilibert'>
            <span>
              <GitHub />
            </span>
          </a>
        </li>
        <li>
          <span>
            <Bell />
          </span>
        </li>
        <li>
          <span>
            <Heart />
          </span>
        </li>
      </ul>
    </header>
  )
}
