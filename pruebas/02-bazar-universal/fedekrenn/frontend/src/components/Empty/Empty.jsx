import './empty.css'
import img from '../../assets/empty.svg'

export default function Empty() {
  return (
    <div className='empty'>
      <div>
        <h1>No hay nada por aquí!</h1>
        <h2>Prueba con otro término</h2>
      </div>
      <img src={img} alt='Imagen representativa de resultados no encontrados' />
    </div>
  )
}
