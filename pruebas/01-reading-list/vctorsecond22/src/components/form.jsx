import { IconSearch } from './Icons'
import responseBooks from '../data/books.json';
import { useId } from 'react';
import './form.css'
import { FilterContext } from '../context/FormContex'
import { useContext } from 'react';
export default function Form() {
  const { form, setform } = useContext(FilterContext)
  window.localStorage.setItem('formFilters', JSON.stringify(form))
  const categoryFilter = useId()
  const pagesFilter = useId()
//traspasat a un archivo de constantes????????????????
  const allGenres = Array.from(new Set(responseBooks.library.map(({ book }) => book.genre)))
  const allPages = Array.from(new Set(responseBooks.library.map(({ book }) => book.pages)))
  const colas= [Math.min(...Object.values(allPages)),Math.max(...Object.values(allPages))] 
  
  const handleSubmit = (event) => {
    event.preventDefault()
   // const queryInputs= Object.fromEntries(new window.FormData(event.target))
   // console.log(form)
  }
  const handleChangeInpt = (e) => {
    setform({
      ...form,
      propTitle: e.target.value.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    })
  }
  const handleChangeSelect = (e) => {
    setform({
      ...form,
      propCategoria: e.target.value,
    }
    );
  }
  const handleChangePages = (e) => {
    setform({
      ...form,
      propPages: e.target.value,
    }
    );
  }

  return (
    <form className='form--filter' onSubmit={handleSubmit} >
      <label htmlFor={categoryFilter}>Categoria:</label>
      <select onChange={handleChangeSelect} className='sel' defaultValue={form.propCategoria} id={categoryFilter} >
        <option value={'Todas'}>Todas</option>
        {
          allGenres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))
        }
      </select>      
      <label  className='form__labelPage' htmlFor={pagesFilter}>Pàginas:</label>
      <input
       type="range"
       id='paginasFilter'
       className='form__input--PaginasFilter'
       min={colas[0]}
       max={colas[1]}
       onChange={handleChangePages}
       value={form.propPages}
        /> 
        <span className='__span--number'>{form.propPages}</span>

      <button type='submit' className='form__button--style'>
        <IconSearch />
        <span className='spanbtn'> Buscar</span>
      </button>
      <input value={form.propTitle} name='queryinputText01' placeholder='Drácula,  Juego de Tronos,  Harry Potter y la piedra filosofal ... ' type="text"  onChange={handleChangeInpt}  className='form__input--search' />


    </form>
  )
}