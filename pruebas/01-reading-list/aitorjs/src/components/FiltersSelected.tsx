import { useBooksStore } from '../store/booksStore'

const FiltersSelected = () => {
  const { filters } = useBooksStore()

  return (
    <>
      {Object.keys(filters).length > 0 && (
        <div className='flex justify-start'>
          <p className='mt-4 mb-4'>
            {filters.pages > 0 && <span>Hasta <span className='font-medium'>{filters.pages} páginas</span>.</span>}
            {filters.genre !== undefined && <span> Género es <span className='font-medium'>{filters.genre}</span>.</span>}
          </p>
        </div>
      )}
    </>
  )
}

export default FiltersSelected
