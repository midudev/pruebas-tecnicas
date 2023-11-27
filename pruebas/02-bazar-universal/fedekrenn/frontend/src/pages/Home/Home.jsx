import './home.css'
import Search from '../../components/Search/Search.jsx'
import logo from '../../assets/logo.svg'
import useSeo from '../../customHooks/useSeo.js'

export default function Home() {
  useSeo({ title: 'Home', description: 'Bazar Online - Tu tienda virtual con los mejores productos' })

  return (
    <main className='home'>
      <img src={logo} alt='Logo principal de la página' />
      <h1>Bazar Online</h1>
      <Search showButton />
    </main>
  )
}
