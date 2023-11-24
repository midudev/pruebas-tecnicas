import img from '../../assets/404.svg'
import './notFound.css'
// Components
import Header from '../../components/Header/Header.jsx'

export default function NotFound({ message = 'No existe la página' }) {
  return (
    <>
      <Header />
      <main className='not-found'>
        <h1>Ups!! Algo no sucedió como esperábamos</h1>
        <h2>{message}</h2>
        <img src={img} alt='Logo de error 404, recurso no encontrado' />
      </main>
    </>
  )
}
