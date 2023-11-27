import './header.css'
import img from '../../assets/logo.svg'
// Components
import Search from '../../components/Search/Search.jsx'
// Router
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={img} alt='Imagen de logo' />
      </Link>
      <Search />
    </header>
  )
}
