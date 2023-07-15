import Slider from './Slider'
import Selects from './Selects'

export default function Filters() {
  return (
    <div className='w-full flex gap-16'>
        <article>
            <label>Filtrar por páginas</label>
            <Slider />
        </article>
        <article>
            <Selects />
        </article>
    </div>
  )
}
