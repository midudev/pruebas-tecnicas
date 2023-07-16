export default function App () {
  return (
    <>
      <h3>Sin libros en la lista de lectura</h3>
      <main>
        <h1>13 libros disponibles</h1>
        <form role='search'>
          <label htmlFor='pages-filter'>
            <div>Filtrar por páginas</div>
            <input id='pages-filter' type='range' />
          </label>
          <label htmlFor='genre-filter'>
            <div>Filtrar por género</div>
            <select id='genre-filter'>
              <option value=''>Todos los géneros</option>
            </select>
          </label>
        </form>
        <div role='grid'>
          <span role='gridcell'>
            <img src='' alt='Book cover' />
          </span>
        </div>
      </main>
    </>
  )
}
