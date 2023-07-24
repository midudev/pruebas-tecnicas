import { useBooksStore } from '../store/booksStore'

const FiltersSelected = () => {
  const { filters } = useBooksStore()
  return (
    <>
      {Object.keys(filters).length > 0 && (
        <p>
          Seleccionado:
          {filters.pages > 0 && <span>Hasta {filters.pages} páginas.</span>}
          {filters.genre !== undefined && <span>Genero {filters.genre}.</span>}
        </p>
      )}
    </>
  )
}

export default FiltersSelected
